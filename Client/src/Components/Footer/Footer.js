import React from 'react'
import './footer.css';
import fb from '../../Assets/Images/fb.png';
import linkedin from '../../Assets/Images/linkedin.png';
import gmail from '../../Assets/Images/gmail.png';
import github from '../../Assets/Images/github.png';
function Footer (){
  return (<>
    <div className='footer-margin-top'></div>
    <div className="container_footer">
      <div className="slogan">
        <p>Urbar baari kisanko gahana<br/>
          Swastha kheti hamro c.hahana</p>
      </div>
      <div className="images">
   <img src={linkedin} alt="Linkedinimage"/>
   <img src={fb} alt="Fbimage"/>
   <img src={gmail} alt="gmailimage"/>
   <img src={github} alt="githubimage"/></div>
      <h4>&copy; 2024 copyright: Vecrosoft.com</h4>
    </div>
    </>
  )
}

export default Footer; 
