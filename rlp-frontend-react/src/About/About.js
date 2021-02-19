import './About.css';
import axios from 'axios';
import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
          <h3>
                Click on an avatar to show more details
          </h3>
          </div>
          <div className="img">
              <img src={about} alt="about photo" width="330" height="560">
              </img>
          </div>
          </div>
              <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #1865F2;\n  color: white;\n  font-size: 16px;\n  padding: 8px 16px;\n}\n" }} />
            <div className="container">
              <img src={avatar1} alt="Avatar1" className="image" style={{width: '65%'}} />
              <div className="middle">
                <Link to={'/mohammed'} class="mohammedbtn" href="">Mohammed</Link>
              </div>
            </div>
          </div>
          <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #1865F2;\n  color: white;\n  font-size: 16px;\n  padding: 8px 16px;\n}\n" }} />
          <div className="container">
            <img src={avatar2} alt="Avatar2" className="image" style={{width: '65%'}} />
            <div className="middle">
              <Link to={'/ahmed'} class="ahmedbtn" href="">Ahmed</Link>
            </div>
          </div>
        </div>
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #1865F2;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n" }} />
        <div className="container">
          <img src={avatar3} alt="Avatar3" className="image" style={{width: '65%'}} />
          <div className="middle">
            <Link to={'/arran'} class="arranbtn" href="">Arran</Link>
          </div>
        </div>
        </div>
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #1865F2;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n" }} />
        <div className="container">
          <img src={avatar4} alt="Avatar4" className="image" style={{width: '65%'}} />
          <div className="middle">
            <Link to={'/sagar'} class="sagarbtn" href="">Sagar</Link>
          </div>
        </div>
        </div>
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #1865F2;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n" }} />
        <div className="container">
          <img src={avatar5} alt="Avatar5" className="image" style={{width: '65%'}} />
          <div className="middle">
            <Link to={'/keyur'} class="keyurbtn" href="">Keyur</Link>
          </div>
        </div>
        </div>
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{__html: "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #1865F2;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n" }} />
        <div className="container">
          <img src={avatar6} alt="Avatar6" className="image" style={{width: '65%'}} />
          <div className="middle">
            <Link to={'/sekhar'} class="sekharbtn" href="">Sekhar</Link>
          </div>
        </div>
        </div>
          </body>
          </div>

  )
}
export default About;
