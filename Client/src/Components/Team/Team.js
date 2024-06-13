import React from 'react';
import './Team.css';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import member1 from '../../Assets/Images/dipaPic.JPG';
import member2 from '../../Assets/Images/dipakPic.jpg';
import team3 from '../../Assets/Images/profilePic1.JPG';
import team4 from '../../Assets/Images/profilePic1.JPG';
import team5 from '../../Assets/Images/profilePic1.JPG';

function Team() {
  const teamMembers = [
    {
      name: 'Dipa Joshi',
      role: 'Project Manager || Frontend Developer',
      image: member1,
      github: 'https://github.com/dipajoshi',
      facebook: 'https://facebook.com/dipajoshi',
      linkedin: 'https://linkedin.com/in/dipajoshi',
      email: 'mailto:dipa.joshi@example.com',
    },
    {
      name: 'Dipak Raj Giri',
      role: 'Full Stack Developer',
      image: member2,
      github: 'https://github.com/dipakrajgiri',
      facebook: 'https://facebook.com/dipakrajgiri',
      linkedin: 'https://linkedin.com/in/dipakrajgiri',
      email: 'mailto:dipak.rajgiri@example.com',
    },
    {
      name: 'Catherine Lee',
      role: 'Project Manager',
      image: team3,
      github: 'https://github.com/catherinelee',
      facebook: 'https://facebook.com/catherinelee',
      linkedin: 'https://linkedin.com/in/catherinelee',
      email: 'mailto:catherine.lee@example.com',
    },
    {
      name: 'Daniel Brown',
      role: 'UI/UX Designer',
      image: team4,
      github: 'https://github.com/danielbrown',
      facebook: 'https://facebook.com/danielbrown',
      linkedin: 'https://linkedin.com/in/danielbrown',
      email: 'mailto:daniel.brown@example.com',
    },
    {
      name: 'Eva White',
      role: 'Data Scientist',
      image: team5,
      github: 'https://github.com/evawhite',
      facebook: 'https://facebook.com/evawhite',
      linkedin: 'https://linkedin.com/in/evawhite',
      email: 'mailto:eva.white@example.com',
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-icons">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={member.email} target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
