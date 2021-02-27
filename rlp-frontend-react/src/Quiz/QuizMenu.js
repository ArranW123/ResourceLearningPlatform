import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './QuizMenu.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
function QuizMenu(){
    return(
        <body>
            <Header/>
            <div>
                <div className='title'>
                <h1>Quiz Menu</h1>
                </div>
                <li>
                    
                    <div className = 'quizMenu-container'>
                    <div className='quizInfo'>
                    <Link to = {"Quiz1"}>
                    <h2>Computer Science Quiz</h2>
                    <p>4 Questions</p>
                    <p>Difficulty: Easy</p>
                    </Link>
                    </div>

                    <div className='quizInfo'>
                    <Link to = {"Quiz2"}>
                    <h2>Mathematic Quiz</h2>
                    <p>4 Questions</p>
                    <p>Difficulty: Easy</p>
                    </Link>
                    </div>

                    <div className = 'quizInfo'>
                    <Link to = {"Quiz3"}>
                    <h2>Science Quiz</h2>
                    <p>6 Questions</p>
                    <p>Difficulty: Easy</p>
                    </Link>
                    </div>
                    </div>
                    


                </li>

            </div>
        </body>
    )
}

export default QuizMenu;