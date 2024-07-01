import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final TextEditingController _controller = TextEditingController();
  String _question = "";
  String _answer = "";
  bool _loading = false;

  Future<void> generateAnswer() async {
    setState(() {
      _loading = true;
      _answer = "";
    });

    try {
      final response = await http.post(
        Uri.parse(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBALG93Bt9rVrdodrCIU0k2XjlrKHXjt7g'),
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.encode({
          'contents': [
            {
              'parts': [
                {'text': _question}
              ]
            }
          ]
        }),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        setState(() {
          _answer = data['candidates'][0]['content']['parts'][0]['text'];
        });
      } else {
        setState(() {
          _answer = "Sorry, something went wrong. Please try again.";
        });
      }
    } catch (error) {
      print("Error fetching data: $error");
      setState(() {
        _answer = "Sorry, something went wrong. Please try again.";
      });
    } finally {
      setState(() {
        _loading = false;
        _controller.clear();
        _question = "";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AI Chat'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.circular(8.0),
                ),
                padding: const EdgeInsets.all(16.0),
                child: SingleChildScrollView(
                  child: _answer.isEmpty
                      ? Text('How can I help you? Ask me anything!')
                      : Text(_answer),
                ),
              ),
            ),
            const SizedBox(height: 10),
            TextField(
              controller: _controller,
              onChanged: (value) {
                setState(() {
                  _question = value;
                });
              },
              decoration: InputDecoration(
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
                hintText: 'Type your question here...',
              ),
              maxLines: 3,
            ),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: _loading ? null : generateAnswer,
              child: _loading ? CircularProgressIndicator() : Text('Send'),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green,
                padding: const EdgeInsets.symmetric(vertical: 16.0),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
