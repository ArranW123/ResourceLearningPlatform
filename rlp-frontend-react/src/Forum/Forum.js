import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import './Forum.css';
import axios from 'axios';
import React, {Component} from "react";


function forum() {
    return (
        <body>
            <ol>
            <h1>E.LEARNING</h1>
            
            <li class="row">

                <Link to={'/ComputerScience'} className="h2"> Computer Science</Link>
                <div class ="bottom">
                    <p class="timestamp">Last Updated: 02/02/2021</p>
                    <p class="comment-count">4 threads</p>
                </div>
                
                 
                <h2>Mathematics</h2>              
                <div class ="bottom">
                    <p class="timestamp">Last Updated: 02/02/2021</p>
                    <p class="comment-count">4 threads</p>
                </div>  
                <h2>Science</h2>              
                <div class ="bottom">
                    <p class="timestamp">Last Updated: 02/02/2021</p>
                    <p class="comment-count">4 threads</p>
                </div>
            </li>
        </ol>
    </body>

    );
        
}
export default forum;
