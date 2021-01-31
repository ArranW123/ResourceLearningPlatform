import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import './Homepage.css';
import banner from './Banner.png'
import remote from './remote_learning.png'


function Homepage(){
    return(
        <div>
            <Header />
    <div className="banner-container">
        <div className="info">
            <h1>
            E.LEARNING 
            </h1>
            <h2>
            Online learning platform for anyone, anywhere. A global resource pool with more resources being uploaded everyday. <br></br>
            For Every Student, Every Teacher 📚 <br></br>
            </h2>
            </div>
            <div className="img">
            <img src={banner} alt="Banner">
            </img>
            </div>
    </div>
    <div className="form-email">
        <form>
            <input type="text" placeholder="Email"></input>
            <button>I'm a Student</button>
            <button>I'm a Teacher</button>
        </form>
    </div>

    <div class="info-container">
        <div className="img-container">
        <img src={remote} alt="Remote img">
        </img> 
        </div>

        <div className="info">
        <h1>Remote Learning Made Easy</h1>
        <p>Globally, over 1.2 billion children are out of the classroom. We’re a delivering the education they need through online learning.</p>
        </div>
    </div>

    <div className="signup">
        <div class="title">
            <h1>Join Us Today</h1>
        </div>

        <div className="buttons">
        <button class="b1"> Learners</button>
        &nbsp;
        <button class="b2"> Teachers</button>
        &nbsp;
        <Link to={'/download'} className="b3"> Explore</Link>
        </div>
    </div>
    
    </div>
    );

}

export default Homepage;