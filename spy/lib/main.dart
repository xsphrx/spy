import 'package:flutter/material.dart';
import 'package:spy/pages/home.dart';
import 'package:spy/pages/loading.dart';
import 'package:spy/pages/createGame.dart';

void main() => runApp(
      MaterialApp(initialRoute: '/', routes: {
        '/': (context) => Loading(),
        '/home': (context) => Home(),
        '/createGame': (context) => createGame(),
      }),
    );
