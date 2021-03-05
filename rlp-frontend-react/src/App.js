import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import AddJob from "./Components/addJob/AddJob";
// import ViewJob from "./Components/viewJob/ViewJob";
import './App.css';
import Upload from "./Upload/Upload"
import Header from "./Header/Header"
import Homepage from "./Homepage/Homepage"
import Download from "./Download/Download"
import About from "./About/About"
import ChatRoom from "./ChatRoom/chatroom"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import forum from "./Forum/Forum"
import ComputerScience from "./Forum/ComputerScience"
import Thread1 from "./Forum/Threads/ComputerScience/Thread1";
import Mohammed from "./Mohammed/mohammed"
import Ahmed from "./Ahmed/ahmed"
import Arran from "./Arran/arran"
import Sagar from "./Sagar/sagar"
import Keyur from "./Keyur/keyur"
import Sekhar from "./Sekhar/sekhar"

function App() {
    return (
      <Router>
          <Switch>
              {/* <Route exact path='/' component={Header} /> */}
              <Route exact path='/' component={Homepage} />
              {<Route path='/upload' component={Upload} />}
              {<Route path='/download' component={Download} />}
              {<Route path='/about' component={About} />}
              {<Route path='/chatroom' component={ChatRoom} />}
              {<Route path='/login' component={Login} />}
              {<Route path='/signup' component={Signup} />}
              {<Route path='/Forum' component={forum} />}
              {<Route path='/ComputerScience' component={ComputerScience}/>}
              {<Route path='/Thread1' component={Thread1}/>}
              {<Route path='/mohammed' component={Mohammed}/>}
              {<Route path='/ahmed' component={Ahmed}/>}
              {<Route path='/arran' component={Arran}/>}
              {<Route path='/sagar' component={Sagar}/>}
              {<Route path='/keyur' component={Keyur}/>}
              {<Route path='/sekhar' component={Sekhar}/>}

          </Switch>
      </Router>
    );
  }


export default App;
