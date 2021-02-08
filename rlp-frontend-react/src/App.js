import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import AddJob from "./Components/addJob/AddJob";
// import ViewJob from "./Components/viewJob/ViewJob";
import './App.css';
import Upload from "./Upload/Upload"
import Homepage from "./Homepage/Homepage"
import Download from "./Download/Download"
import About from "./About/About"
import Login from "./Login/Login"
import Profile from "./Profile/Profile"
import Signup from "./Signup/Signup"
import forum from "./Forum/Forum"
import PrivateRoute from "./Login/PrivateComponent"
import ComputerScience from "./Forum/ComputerScience"
import Thread1 from "./Forum/Threads/ComputerScience/Thread1";

function App() {
    return (
      <Router>
          <Switch>
              {/* <Route exact path='/' component={Header} /> */}
              <Route exact path='/' component={Homepage} />
              {<Route path='/upload' component={Upload} />}
              {<Route path='/download' component={Download} />}
              {<Route path='/about' component={About} />}
              {<Route path='/login' component={Login} />}
              {<Route path='/signup' component={Signup} />}
              <PrivateRoute authed={sessionStorage.getItem('user')} path='/Profile' component={Profile} />
              {<Route path='/Forum' component={forum} />}
              {<Route path='/ComputerScience' component={ComputerScience}/>}
              {<Route path='/Thread1' component={Thread1}/>}
          </Switch>
      </Router>
    );
  }


export default App;
