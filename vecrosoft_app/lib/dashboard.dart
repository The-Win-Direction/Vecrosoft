import 'package:flutter/material.dart';
import 'package:vecrosoft_app/aboutus_screen.dart';
import 'package:vecrosoft_app/ai_screen.dart';
import 'package:vecrosoft_app/chat_screen.dart';
import 'package:vecrosoft_app/help_screen.dart';
//import 'package:vecrosoft_app/main.dart';

class DashBoardScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Dashboard"),
      ),
      body: Container(
        color: Colors.blue[100], // Background color for the dashboard
        child: Center(
          child: GridView.count(
            crossAxisCount: 2,
            mainAxisSpacing: 100,
            crossAxisSpacing: 50,
            children: <Widget>[
              DashboardButton(
                label: 'Chat Bot',
                icon: Icons.chat_rounded,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => ChatScreen()),
                  );
                },
              ),

              DashboardButton(
                label: 'Disease Detection',
                icon: Icons.color_lens_rounded,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => DiseaseDetectionScreen()),
                  );
                },
              ),

              DashboardButton(
                label: 'Help Section',
                icon: Icons.help_center,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => HelpScreen()),
                  );
                },
              ),

              DashboardButton(
                label: 'About Us',
                icon: Icons.info,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => AboutUsPage()),
                  );
                },
              ),

              // Add more DashboardButton widgets for other sections as needed
            ],
          ),
        ),
      ),
    );
  }
}

class DashboardButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final VoidCallback onPressed;

  DashboardButton(
      {required this.label, required this.icon, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.green, // Button color
      child: InkWell(
        onTap: onPressed,
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Icon(icon, size: 50),
              Text(label),
            ],
          ),
        ),
      ),
    );
  }
}
