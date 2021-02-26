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

                <li>
                <div className="bottom">
                  <h4>Mathematics</h4>
                  <p className="timestamp">Last Updated: 02/02/2021</p>
                    <p className="comment-count">4 Thread(s)</p>
                  </div>
                </li>
                <li>
                <div className="bottom">
                  <h4>Science</h4>
                  <p className="timestamp">Last Updated: 02/02/2021</p>
                    <p className="comment-count">4 Thread(s)</p>
                  </div>
                </li>
          </div>
      </body>
    </React.Fragment>
  );
}
export default forum;