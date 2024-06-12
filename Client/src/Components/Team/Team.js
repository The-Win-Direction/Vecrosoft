import React from 'react';
import './Team.css';
import profilePic1 from '../../Assets/Images/profilePic1.JPG';

// Example team member data
const teamMembers = [
  {
    name: 'Dipa Joshi',
    position: 'CEO & Founder',
    description: 'John is the visionary behind our company. With over 20 years of experience, he leads with passion and dedication.',
    image: '../../Assets/Images/profilePic1.JPG'
  },
  {
    name: 'Jane Smith',
    position: 'COO',
    description: 'Jane ensures our operations run smoothly and efficiently. She is an expert in operational management.',
    image: 'path/to/jane.jpg'
  },
  {
    name: 'Sam Wilson',
    position: 'CTO',
    description: 'Sam is the tech genius of our team. He is responsible for our technological advancements and innovations.',
    image: 'path/to/sam.jpg'
  },
  {
    name: 'Sara Lee',
    position: 'Marketing Director',
    description: 'Sara drives our marketing strategies and helps us reach our audience effectively with her creative ideas.',
    image: 'path/to/sara.jpg'
  },
  {
    name: 'Michael Brown',
    position: 'CFO',
    description: 'Michael manages our finances and ensures our financial health with his excellent financial planning skills.',
    image: 'path/to/michael.jpg'
  }
];

function Team() {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}`} className="profile-pic" />
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
