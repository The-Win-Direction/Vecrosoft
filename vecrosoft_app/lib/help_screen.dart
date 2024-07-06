import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class HelpScreen extends StatefulWidget {
  @override
  _HelpScreenState createState() => _HelpScreenState();
}

class _HelpScreenState extends State<HelpScreen> {
  final List<HelpItem> faqs = [
    HelpItem(
      question: "How do I reset my password?",
      email: 'projectvecrosoft@gmail.com',
    ),
    HelpItem(
      question: "Where can I find my account settings?",
      email: 'projectvecrosoft@gmail.com',
    ),
    HelpItem(
      question: "How do I contact support?",
      email: 'projectvecrosoft@gmail.com',
    ),
    HelpItem(
      question: "What are the supported payment methods?",
      email: 'projectvecrosoft@gmail.com',
    ),
    // Add more FAQ items as needed
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Help'),
      ),
      body: ListView.builder(
        itemCount: faqs.length,
        itemBuilder: (context, index) {
          return ListTile(
              title: Text(faqs[index].question),
              onTap: () {
                try {
                  _sendEmail(faqs[index].email);
                } catch (e) {
                  print('Error launching email: $e');
                }
              });
        },
      ),
    );
  }

  void _sendEmail(String email) async {
    final Uri _emailLaunchUri = Uri(
      scheme: 'mailto',
      path: email,
      queryParameters: {
        'subject': 'Help Request',
        'body': 'Hello, I need help with...',
      },
    );

    try {
      if (await canLaunch(_emailLaunchUri.toString())) {
        await launch(_emailLaunchUri.toString());
      } else {
        throw 'Could not launch email';
      }
    } catch (e) {
      print('Error launching email: $e');
    }
  }
}

class HelpItem {
  final String question;
  final String email;

  HelpItem({required this.question, required this.email});
}
