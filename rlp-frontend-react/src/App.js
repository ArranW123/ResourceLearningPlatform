import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import AddJob from "./Components/addJob/AddJob";
// import ViewJob from "./Components/viewJob/ViewJob";
import './App.css';
import Upload from "./Upload/Upload"
import Header from "./Header/Header"
import Homepage from "./Homepage/Homepage"
import Download from "./Download/Download"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import forum from "./Forum/Forum"
import ComputerScience from "./Forum/ComputerScience"

function App() {
    return (
      <Router>
          <Switch>
              {/* <Route exact path='/' component={Header} /> */}
              <Route exact path='/' component={Homepage} />
              {<Route path='/upload' component={Upload} />}
              {<Route path='/download' component={Download} />}
              {<Route path='/login' component={Login} />}
              {<Route path='/signup' component={Signup} />}
              {<Route path='/Forum' component={forum} />}
              {<Route path='/Forum' component={ComputerScience}/>}
          </Switch>
      </Router>
    );
  }


export default App;

