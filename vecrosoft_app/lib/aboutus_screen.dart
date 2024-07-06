import 'package:flutter/material.dart';
import 'package:vecrosoft_app/description_page.dart';

class TeamMember {
  final String name;
  final String role;
  final String bio;
  final String imageUrl;

  TeamMember({
    required this.name,
    required this.role,
    required this.bio,
    required this.imageUrl,
  });
}

class AboutUsPage extends StatefulWidget {
  @override
  _AboutUsPageState createState() => _AboutUsPageState();
}

class _AboutUsPageState extends State<AboutUsPage>
    with SingleTickerProviderStateMixin {
  AnimationController? _controller;
  Animation<double>? _animation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 1),
    );
    _animation = CurvedAnimation(parent: _controller!, curve: Curves.easeInOut);
    _controller!.forward();
  }

  @override
  void dispose() {
    _controller!.dispose();
    super.dispose();
  }

  // Dummy data for team members
  final List<TeamMember> teamMembers = [
    TeamMember(
      name: 'Anuradha Bhatta',
      role: 'Tester',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'assets/anuradhaPic.jpg',
    ),
    TeamMember(
      name: 'Dhiraj Pant',
      role: ' AI Developer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'assets/dhirajPic.jpg',
    ),
    TeamMember(
      name: 'Dipak Raj Giri',
      role: 'Back End Developer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'assets/dipakPic.jpg',
    ),
    TeamMember(
      name: 'Dipa Joshi',
      role: 'Front End Designer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'assets/dipaPic.jpg',
    ),
    TeamMember(
      name: 'Menuka Paneru',
      role: 'App Developer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'assets/menukaPic.jpg',
    ),
    TeamMember(
      name: 'Rishi k. Marseni',
      role: 'Advisor',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'assets/RishiSirPic.jpg',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('About Us'),
      ),
      body: ListView(
        padding: EdgeInsets.all(16.0),
        children: [
          Center(
            child: AnimatedBuilder(
              animation: _animation!,
              builder: (context, child) {
                return Opacity(
                  opacity: _animation!.value,
                  child: Transform.scale(
                    scale: _animation!.value,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16.0),
                      child: Text(
                        'Vecrosoft, an AI-powered software',
                        style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Colors.green),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          Divider(),
          SizedBox(height: 20),
          Text(
            'Meet Our Team',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 20),
          Column(
            children: teamMembers.map((member) {
              return Card(
                margin: EdgeInsets.symmetric(vertical: 10),
                child: ListTile(
                  leading: CircleAvatar(
                    backgroundImage: AssetImage(member.imageUrl),
                  ),
                  title: Text(member.name),
                  subtitle: Text(member.role),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => TeamMemberDescriptionPage(
                          name: member.name,
                          role: member.role,
                          bio: member.bio,
                          imageUrl: member.imageUrl,
                        ),
                      ),
                    ); // Handle tapping on a team member card
                  },
                ),
              );
            }).toList(),
          ),
        ],
      ),
    );
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AboutUsPage(),
    );
  }
}
