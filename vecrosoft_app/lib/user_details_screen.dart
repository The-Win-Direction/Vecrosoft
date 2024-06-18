import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class UserDetailsScreen extends StatefulWidget {
  @override
  _UserDetailsScreenState createState() => _UserDetailsScreenState();
}

class _UserDetailsScreenState extends State<UserDetailsScreen> {
  late Map<String, dynamic> userData;

  @override
  void initState() {
    super.initState();
    fetchUserData();
  }

  Future<void> fetchUserData() async {
    final response =
        await http.get(Uri.parse('https://api.example.com/user/1'));
    if (response.statusCode == 200) {
      setState(() {
        userData = json.decode(response.body);
      });
    } else {
      throw Exception('Failed to load user data');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('User Details'),
      ),
      body: userData == 0
          ? Center(child: CircularProgressIndicator())
          : Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: <Widget>[
                  Text(
                    userData['name'],
                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 20),
                  Text('General Information'),
                  ListTile(
                    title: Text('Create Date'),
                    subtitle: Text(userData['createdAt']),
                  ),
                  ListTile(
                    title: Text('Phone'),
                    subtitle: Text(userData['phone']),
                  ),
                  ListTile(
                    title: Text('Address'),
                    subtitle: Text(userData['address']),
                  ),
                  SizedBox(height: 20),
                  Text('User Experience'),
                  ListTile(
                    leading: Icon(Icons.star, color: Colors.green),
                    title: Text(userData['experience']),
                  ),
                  SizedBox(height: 20),
                  Text('User Background'),
                  ListTile(
                    leading: Icon(Icons.agriculture),
                    title: Text(userData['background']),
                  ),
                ],
              ),
            ),
    );
  }
}
