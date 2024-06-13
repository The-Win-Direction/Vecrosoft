import React from 'react';
import './Team.css';
import team1 from '../../Assets/Images/profilePic1.JPG'
import team2 from '../../Assets/Images/profilePic1.JPG'
import team3 from '../../Assets/Images/profilePic1.JPG'
import team4 from '../../Assets/Images/profilePic1.JPG'
import team5 from '../../Assets/Images/profilePic1.JPG'


function Team() {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Lead Developer', image: team1 },
    { name: 'Bob Smith', role: 'AI Specialist', image: team2 },
    { name: 'Catherine Lee', role: 'Project Manager', image: team3 },
    { name: 'Daniel Brown', role: 'UI/UX Designer', image: team4 },
    { name: 'Eva White', role: 'Data Scientist', image: team5 },
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
