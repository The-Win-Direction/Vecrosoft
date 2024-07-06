import 'package:flutter/material.dart';

class TeamMemberDescriptionPage extends StatelessWidget {
  final String name;
  final String role;
  final String bio;
  final String imageUrl;

  TeamMemberDescriptionPage({
    required this.name,
    required this.role,
    required this.bio,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(name),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Center(
              child: CircleAvatar(
                radius: 60,
                backgroundImage: AssetImage(imageUrl),
              ),
            ),
            SizedBox(height: 20),
            Text(
              'Name: $name',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10),
            Text(
              'Role: $role',
              style: TextStyle(fontSize: 18),
            ),
            SizedBox(height: 10),
            Text(
              'Bio:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10),
            Text(
              bio,
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
