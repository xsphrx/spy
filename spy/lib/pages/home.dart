import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Color.fromRGBO(34, 34, 34, 1),
        body: SafeArea(
          child: Container(
            child: Column(
              children: <Widget>[
                Container(
                  alignment: Alignment.topLeft,
                  padding: EdgeInsets.all(20.0),
                  child: Text(
                    'スパイ',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 40,
                    ),
                  ),
                ),
                SizedBox(height: 40),
                Center(
                  child: FlatButton(
                    color: Color.fromRGBO(117, 117, 117, 1),
                    onPressed: () {
                      Navigator.pushNamed(context, '/createGame');
                    },
                    child: Text(
                      "Create",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w300,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
