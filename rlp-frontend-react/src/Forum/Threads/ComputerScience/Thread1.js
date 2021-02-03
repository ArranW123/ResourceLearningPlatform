import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../../../Header/Header';
import './Thread1.css';
import axios from 'axios';
import React, {Component} from "react";

function Thread1(){
    return(
        <body>
            <Header />
            <h1>Hello!</h1>
        </body>
    );
}
export default Thread1;
