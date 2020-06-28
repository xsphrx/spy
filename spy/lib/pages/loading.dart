import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:http/http.dart';
import 'dart:convert';

class Loading extends StatefulWidget {
  @override
  _LoadingState createState() => _LoadingState();
}

class _LoadingState extends State<Loading> {
  Future<void> setupSpy() async {
    try {
      Response response = await get('http://localhost:8888/spy/game');
      Map data = jsonDecode(response.body);

      // get properties from json
      String datetime = data['datetime'];
      String offset = data['utc_offset'].substring(1, 3);

      // create DateTime object
      DateTime now = DateTime.parse(datetime);
      now = now.add(Duration(hours: int.parse(offset)));
    } catch (e) {}

    Navigator.pushReplacementNamed(context, '/home', arguments: {
      'arg1': 'ag1',
    });
  }

  @override
  void initState() {
    super.initState();
    setupSpy();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Color.fromRGBO(34, 34, 34, 1),
        body: Center(
            child: SpinKitPulse(
          color: Colors.white,
          size: 50.0,
        )));
  }
}
