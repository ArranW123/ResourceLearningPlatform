import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import "./Forum.css";
import axios from "axios";
import React, { Component } from "react";

function forum() {
  return (
    <React.Fragment>
      <Header />

      <body>
        <div>

              <br />
              <h1 className='forumTitle'>Forum</h1>
                <div className="bottom">
                  <Link to={"ComputerScience"}>
                    <h4>Computer Science</h4>
                  <div class="forumInfo">
                    <p>Last Updated: 25/02/2021</p>
                    <p>1 Thread(s)</p>
                  </div>
                  </Link>
                </div>

                
          </div>
      </body>
    </React.Fragment>
  );
}
export default forum;