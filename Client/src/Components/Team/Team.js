import React from 'react';
import './Team.css'; 
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import mentor from '../../Assets/Images/RishiSirPic.jpg';
import member2 from '../../Assets/Images/dipakPic.jpg';
import member3 from '../../Assets/Images/dipaPic.JPG';
import member4 from '../../Assets/Images/menukaPic.jpg';
import member5 from '../../Assets/Images/anuradhaPic.jpg';
import member6 from '../../Assets/Images/dhirajPic.jpg';

function Team() {
  const teamMembers = [  
   
    {
      name: 'Dipak Raj Giri',
      role: 'Full Stack Developer',
      image: member2,
      github: 'https://github.com/dipakrajgiri',
      linkedin: 'https://linkedin.com/in/dipakrajgiri',
      email: 'mailto:dipak.rajgiri@example.com',
    },
    {
      name: 'Dipa Joshi',
      role: 'Project Manager || Frontend Developer',
      image: member3,
      github: 'https://github.com/dipajoshi', 
      linkedin: 'https://linkedin.com/in/dipajoshi',
      email: 'mailto:dipa.joshi@example.com',
    },
   
    {
      name: 'Menuka Paneru',
      role: 'App Developer',
      image: member4,
      github: 'nnn',
      linkedin: 'nn',
      email: 'nn',
    },
    {
      name: 'Anuradha Bhatta',
      role: 'Designer',
      image: member5,
      github: 'nn',
      linkedin: 'nn',
      email: 'm',
    },
    {
      name: 'Dhiraj Pant',
      role: 'AI',
      image: member6,
      github: 'm',
      linkedin: 'm',
      email: ',',
    },
    {
      name: 'Rishi Marseni',
      role: 'Supervisor||Mentor',
      image: mentor,
      github: 'https://github.com/rk-marseni', 
      linkedin: 'https://linkedin.com/',
      email: 'mailto:dipa.joshi@example.com',
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className='image-name'>
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
            </div>
            <p>{member.role}</p>
            <div className="social-icons">
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {/* {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              )} */}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {member.email && (
                <a href={member.email} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
