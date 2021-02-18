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
          <div className="row">
            <div className="col-lg-12">
              <br />
              <ul>
                <li>
                  <Link to={"ComputerScience"}>
                    <h4>Computer Science</h4>
                  </Link>
                  <div className="bottom">
                    <p className="timestamp">Last Updated: 02/02/2021</p>
                    <p className="comment-count">4 threads</p>
                  </div>
                </li>

                <li>
                  <h4>Mathematics</h4>
                  <div className="bottom">
                    <p className="timestamp">Last Updated: 02/02/2021</p>
                    <p className="comment-count">4 threads</p>
                  </div>
                </li>
                <li>
                  <h4>Science</h4>
                  <div className="bottom">
                    <p className="timestamp">Last Updated: 02/02/2021</p>
                    <p className="comment-count">4 threads</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </React.Fragment>
  );
}
export default forum;