import json
from tornado.web import RequestHandler, Application
from tornado.ioloop import IOLoop
import tornado.websocket as ws
import tornado.autoreload
import random
import time
from pymongo import MongoClient
import uuid
from locations import locations


class Game(RequestHandler):
    def get(self):
        res = db.games.find({})
        self.write(res)

class Places(RequestHandler):
    def get(self):
        res = json.dumps(places)
        self.write(res)


def create_game(self):
    data = json.loads(self.request.body)
    db.games.insert_one({
        'name': data['name'],
        'admin': data['userId'],
        'players': [data['userId']],
        'locations': locations,
        'stage': 'pregame',
        'spy': '',
        'place': '',
        'votes': [],
        'time': 10
    })
    self.write(json.dumps('ok'))

def init_conn(self, data):
    game, user = data.values()
    if user not in games[data['gameName']]['players']:
        games[data['gameName']]['players'].append(user)
        for user in conns[game]:
            msg = json.dumps({'action': 'update_players', 'data': {'players': games[data['gameName']]['players']}})
            user['obj'].write_message(msg)

    msg = json.dumps({
        'action': 'init',
        'data': games[game]
    })
    self.write_message(msg)

    conns[game].append({
        'obj': self,
        'name': user
    })


def start_game(data):
    game = data['game']
    games[game]['spy'] = random.choice(games[game]['players'])
    places = [place for place, value in games[game]['places'].items() if value == 1]
    games[game]['place'] = random.choice(places)
    games[game]['stage'] = 'started'
    ends = int(time.time()) + (int(games[game]['time'])*60)
    games[game]['ends'] = ends
    games[game]['votes'] = {player:[] for player in games[game]['players']}
    msg = json.dumps({'action': 'start', 'data': games[game]})
    for user in conns[game]:
        user['obj'].write_message(msg)

def get_games(data):
    res = db.games.find({})
    self.write(res)

def update_place(data):
    place, game = data.values()
    games[game]['places'][place] = 0 if games[game]['places'][place] else 1
    msg = json.dumps({'action': 'update_place', 'data': {'places': games[game]['places']}})
    for user in conns[game]:
        user['obj'].write_message(msg)

def add_place(data):
    place, game = data.values()
    games[game]['places'] = dict({place: 1}, **games[game]['places'])
    msg = json.dumps({'action': 'update_place', 'data': {'places': games[game]['places']}})
    for user in conns[game]:
        user['obj'].write_message(msg)

def start_voting(data):
    game = data['game']
    games[game]['stage'] = 'voting'
    msg = json.dumps({'action': 'start_voting', 'data': games[game]})
    for user in conns[game]:
        user['obj'].write_message(msg)

def vote(data):
    game, name, vote = data.values()
    for player, votes in games[game]['votes'].items():
        if name in votes:
            games[game]['votes'][player].remove(name)
    games[game]['votes'][vote].append(name)
    msg = json.dumps({'action': 'vote', 'data': games[game]['votes']})
    for user in conns[game]:
        user['obj'].write_message(msg)

def end_game(data):
    game = data['game']
    games[game]['votes'] = []
    games[game]['stage'] = 'pregame'
    games[game]['spy'] = ''
    games[game]['place'] = ''

    msg = json.dumps({'action': 'end_game', 'data': games[game]})
    for user in conns[game]:
        user['obj'].write_message(msg)

def update_time(data):
    game, time = data.values()
    games[game]['time'] = time
    msg = json.dumps({'action': 'update_time', 'data': {'time': time}})
    for user in conns[game]:
        user['obj'].write_message(msg)

class MainHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True

    def open(self):
        self.id = db.players.insert_one({'name': '', 'games': []}).inserted_id
        clients[self.id] = self
        msg = json.dumps({'id': id})
        self.write_message(msg)

    def on_close(self):
        pass

    def on_message(self, msg):
        action, data = json.loads(msg).values()
        if action == 'get_games': get_games(self, data)
        if action == 'create': creat_game(self, data)
        if action == 'init': init_conn(self, data)
        if action == 'start': start_game(data)
        if action == 'update_place': update_place(data)
        if action == 'add_place': add_place(data)
        if action == 'start_voting': start_voting(data)
        if action == 'vote': vote(data)
        if action == 'end_game': end_game(data)
        if action == 'update_time': update_time(data)


def make_app():
    return Application([
        (r'/spy/ws', MainHandler),
        (r'/spy/games', Game)
    ])


if __name__ == "__main__":
    client = MongoClient()
    clients = []
    db = client.spy
    conns = {}
    app = make_app()
    app.listen(8888)
    tornado.autoreload.start()
    IOLoop.current().start()
