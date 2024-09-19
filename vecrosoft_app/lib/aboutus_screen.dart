import 'package:flutter/material.dart';
import 'package:vecrosoft_app/description_page.dart';

class TeamMember {
  final String name;
  final String role;
  final String bio;
  final String imageUrl;
  final String contactNumber;
  final String email;

  TeamMember({
    required this.name,
    required this.role,
    required this.bio,
    required this.imageUrl,
    required this.contactNumber,
    required this.email,
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
      bio:
          'Anuradha Bhatta is a meticulous tester with a passion for ensuring the functionality and reliability of our applications. With years of experience in both manual and automated testing methodologies, she meticulously identifies and resolves intricate issues to deliver flawless user experiences. Her attention to detail and proactive approach make her an invaluable asset in maintaining the high standards of our software products.',
      imageUrl: 'assets/anuradhaPic.jpg',
      contactNumber: '9863112288',
      email: 'anuradhabhatta077@gmail.com',
    ),
    TeamMember(
      name: 'Dhiraj Pant',
      role: ' AI Developer',
      bio:
          'Dhiraj Pant is an accomplished AI developer dedicated to harnessing the power of artificial intelligence to build intelligent and efficient solutions. His expertise spans across machine learning algorithms, neural networks, and natural language processing, enabling him to develop cutting-edge AI-driven applications. With a strong focus on innovation and problem-solving, Dhiraj plays a pivotal role in driving technological advancements and enhancing user experiences through sophisticated AI technologies.',
      imageUrl: 'assets/dhirajPic.jpg',
      contactNumber: '9869714340',
      email: 'official.dhirajpant@gmail.com',
    ),
    TeamMember(
      name: 'Dipak Raj Giri',
      role: 'Back End Developer',
      bio:
          'Dipak Raj Giri is a seasoned backend developer proficient in designing and optimizing robust server-side applications. With extensive knowledge of backend technologies such as Node.js, MongoDB, and SQL, Dipak excels in architecting scalable and efficient systems that support our frontend interfaces. His commitment to delivering high-performance solutions and his ability to adapt to evolving technological landscapes make him a key contributor to our development team.',
      imageUrl: 'assets/dipakPic.jpg',
      contactNumber: '9864311321',
      email: 'giridipak743@gmail.com',
    ),
    TeamMember(
      name: 'Dipa Joshi',
      role: 'Front End Designer',
      bio:
          'Dipa Joshi is a creative front-end designer specializing in crafting captivating user interfaces that enhance user engagement and satisfaction. With a keen eye for aesthetics and usability, Dipa combines her design skills with expertise in frontend development technologies such as HTML, CSS, and JavaScript. Her innovative approach and dedication to user-centered design principles ensure that our applications not only look visually appealing but also deliver seamless and intuitive user experiences.',
      imageUrl: 'assets/dipaPic.jpg',
      contactNumber: '9864619901',
      email: 'joshideepa988@gmail.com',
    ),
    TeamMember(
      name: 'Menuka Paneru',
      role: 'App Developer',
      bio:
          'Menuka Paneru is a dynamic app developer passionate about creating mobile applications that drive user productivity and satisfaction. With proficiency in mobile development frameworks like Flutter and React Native, Menuka excels in delivering cross-platform solutions that meet the diverse needs of our users. Her strategic mindset and technical acumen enable her to innovate and implement features that enhance the functionality and performance of our mobile applications.',
      imageUrl: 'assets/menukaPic.jpg',
      contactNumber: '9841424283',
      email: 'menukapaneru07@gmail.com',
    ),
    TeamMember(
      name: 'Rishi k. Marseni',
      role: 'Advisor',
      bio:
          'Rishi K. Marseni brings decades of invaluable experience as an advisor, offering strategic guidance and insights into technology and business domains. His extensive knowledge and deep understanding of market trends and innovations provide our company with a competitive edge in the rapidly evolving tech landscape. His mentorship and visionary leadership empower our team to innovate boldly and drive sustainable growth through strategic initiatives and partnerships.',
      imageUrl: 'assets/RishiSirPic.jpg',
      contactNumber: '9826062807',
      email: 'rishimarseni@gmail.com',
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
                          contactNumber: member.contactNumber,
                          email: member.email,
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
