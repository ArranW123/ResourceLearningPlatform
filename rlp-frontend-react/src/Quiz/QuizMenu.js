import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from 'react';
import Header from '../Header/Header';
function QuizMenu(){
    return(
        <body>
            <Header/>
            <div>
                <h1>Quiz Menu</h1>
                <li>
                    <div>
                    <Link to = {"Quiz1"}>
                    <h2>Computer Science Quiz</h2>
                    <h3>4 Questions</h3>
                    <h4>Difficulty: Easy</h4>
                    </Link>
                    </div>
                    <div>
                    <Link to = {"Quiz2"}>
                    <h2>Mathematic Quiz</h2>
                    <h3>4 Questions</h3>
                    <h4>Difficulty: Easy</h4>
                    </Link>
                    </div>
                    <div>
                    <Link to = {"Quiz3"}>
                    <h2>Science Quiz</h2>
                    <h3>6 Questions</h3>
                    <h4>Difficulty: Easy</h4>
                    </Link>
                    </div>



                </li>

            </div>
        </body>
    )
}

export default QuizMenu;