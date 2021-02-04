import './About.css';
import axios from 'axios';
import Header from '../Header/Header';
import about from './about.png';
import avatar1 from './002-man.png';
import avatar2 from './013-man.png';
import avatar3 from './026-man.png';
import avatar4 from './038-man.png';
import avatar5 from './041-man.png';
import avatar6 from './049-man.png';

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
          <div className="avatar-container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #008CBA;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n" }} />
            <div className="container">
              <img src={avatar1} alt="Avatar1" className="avatar-image" width="512" height="512" />
              <div className="overlay">
                <div className="text">Mohammed</div>
              </div>
            </div>
          </div>
          <div className="avatar-container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #008CBA;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n" }} />
            <div className="container">
              <img src={avatar2} alt="Avatar2" className="avatar-image" width="512" height="512" />
              <div className="overlay">
                <div className="text">Ahmed</div>
              </div>
            </div>
          </div>
          <div className="avatar-container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #008CBA;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n" }} />
            <div className="container">
              <img src={avatar3} alt="Avatar3" className="avatar-image" width="512" height="512" />
              <div className="overlay">
                <div className="text">Arran</div>
              </div>
            </div>
          </div>
          <div className="avatar-container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #008CBA;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n" }} />
            <div className="container">
              <img src={avatar4} alt="Avatar4" className="avatar-image" width="512" height="512" />
              <div className="overlay">
                <div className="text">Sagar</div>
              </div>
            </div>
          </div>
          <div className="avatar-container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #008CBA;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n" }} />
            <div className="container">
              <img src={avatar5} alt="Avatar5" className="avatar-image" width="512" height="512" />
              <div className="overlay">
                <div className="text">Keyur</div>
              </div>
            </div>
          </div>
          <div className="avatar-container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background-color: #008CBA;\n}\n\n.container:hover .overlay {\n  opacity: 1;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n" }} />
            <div className="container">
              <img src={avatar6} alt="Avatar6" className="avatar-image" width="512" height="512" />
              <div className="overlay">
                <div className="text">Sekhar</div>
              </div>
            </div>
          </div>
          </body>
          </div>

  )
}
export default About;
