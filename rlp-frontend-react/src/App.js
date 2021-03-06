import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
import Mohammed from "./Mohammed/mohammed"
import Ahmed from "./Ahmed/ahmed"
import Arran from "./Arran/arran"
import Sagar from "./Sagar/sagar"
import Keyur from "./Keyur/keyur"
import Sekhar from "./Sekhar/sekhar"
import Quiz1 from "./Quiz/Quiz1"
import Quiz2 from "./Quiz/Quiz2"
import Quiz3 from "./Quiz/Quiz3"
import QuizMenu from "./Quiz/QuizMenu"
import ToDoList from "./To-do-List/todo";


function App() {
    return (
      <Router>
          <Switch>
              {/* <Route exact path='/' component={Header} /> */}
              <Route exact path='/' component={Homepage} />
              {<Route path='/upload' component={Upload} />}
              {<Route path='/Quiz1' component={Quiz1} />}
              {<Route path='/Quiz2' component={Quiz2} />}
              {<Route path='/Quiz3' component={Quiz3} />}
              {<Route path='/QuizMenu' component={QuizMenu} />}
              {<Route path='/download' component={Download} />}
              {<Route path='/about' component={About} />}
              {<Route path='/login' component={Login} />}
              {<Route path='/signup' component={Signup} />}
              <PrivateRoute authed={sessionStorage.getItem('user')} path='/Profile' component={Profile} />
              {<Route path='/Forum' component={forum} />}
              {<Route path='/ComputerScience' component={ComputerScience}/>}
              {<Route path='/Thread1' component={Thread1}/>}
              {<Route path='/mohammed' component={Mohammed}/>}
              {<Route path='/ahmed' component={Ahmed}/>}
              {<Route path='/arran' component={Arran}/>}
              {<Route path='/sagar' component={Sagar}/>}
              {<Route path='/keyur' component={Keyur}/>}
              {<Route path='/sekhar' component={Sekhar}/>}
              {<Route path='/ToDoList' component={ToDoList}/>}
          </Switch>
      </Router>
    );
  }


export default App;
