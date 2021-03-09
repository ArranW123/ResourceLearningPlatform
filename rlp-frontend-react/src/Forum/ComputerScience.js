import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import './Forum.css';
import axios from 'axios';
import React, {Component} from "react";

function ComputerScience(){
return(
    <body>
        <Header />
        <div>
        <div>
            &nbsp;
            &nbsp;


            <h1 className='forumTitle'>Welcome to Computer Science</h1>


            &nbsp;
            &nbsp;
            <h3>
            <Link to={'/Thread1'} className="kpbt"> HELP ME! </Link>
            </h3>
        </div>

            <div className = 'bottom'>
            <Link to={"/Thread1"}><h2>Computer Science is hard! HELP ME!!!</h2></Link>
            <p>Last Updated: ...</p>
            <p>Comments: ...</p>
            <h2></h2>

            </div>
        </div>
    </body>

    );
}
export default ComputerScience;
