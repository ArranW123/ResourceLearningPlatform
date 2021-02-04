import './About.css';
import axios from 'axios';
import Header from '../Header/Header';
import about from './about.png';

function About(){
  return(
    <div>
    <Header/>
      <body>
      <div className="info-container">
          <div className="About-Us-info">
          <h1>
                About us page for user information about the team
          </h1>
          <h2>
                Program was created by a team of second year developers<br></br>studying at Brunel University London<br></br>
          </h2>
          </div>
          <div className="img">
              <img src={about} alt="about photo" width="330" height="560">
              </img>
          </div>
          </div>
          </body>
          </div>

  )
}

export default About;
