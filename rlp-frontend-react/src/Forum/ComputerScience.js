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

            <h1>Welcome</h1>
            &nbsp;
            <h2> If you have any Problem or difficulty in your subject don't worry here you can get the help </h2>
            &nbsp;
            &nbsp;
            <h3>
            <Link to={'/Thread1'} className="kpbt"> HELP ME! </Link>
            </h3>
        </div>
            <div>
            
            <p>Last Updated: ...</p>
            <p>Comments: ...</p>
            <h2></h2>
            
            </div>
        </div>
    </body>

    );
}
export default ComputerScience;
