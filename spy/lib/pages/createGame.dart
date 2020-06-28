import 'package:flutter/material.dart';

class createGame extends StatefulWidget {
  @override
  _createGameState createState() => _createGameState();
}

class _createGameState extends State<createGame> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromRGBO(34, 34, 34, 1),
      body: SafeArea(
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                padding: EdgeInsets.all(30.0),
                child: TextFormField(
                  decoration: new InputDecoration(
                      hintText: "Enter your email",
                      labelText: "Email",
                      labelStyle: new TextStyle(color: const Color(0xFF424242)),
                      border: new UnderlineInputBorder(
                          borderSide: new BorderSide(color: Colors.red))),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
