import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../../../Header/Header";
import "./Thread1.css";
import axios from "axios";
import React, { Component } from "react";

function Thread1() {
  return (
    <body>
      <Header />
      <div>
        <h1>Hello!</h1>
        <div>
          <p>I am having trouble with Java programming, can someone help me?</p>
          <form>
            <label for="Name">Name</label>
            <input type="text"></input>
            <br></br>
            <label for="Comment">Comment</label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
          </form>
          <div class="comments"></div>
        </div>
      </div>
    </body>
  );
}

function addComment(comment) {
  var commentHtml = `
        <div class="comment">
            <div class="top-comment">
                <p class="user">${comment.author}</p>
            </div>
            <p class="comment-ts">${new Date(comment.date).toLocaleString()}</p>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
        `;
}
var comments = document.querySelector(".comments");

export default Thread1;