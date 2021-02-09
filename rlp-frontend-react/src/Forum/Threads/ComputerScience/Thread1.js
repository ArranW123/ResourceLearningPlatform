import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../../../Header/Header';
import './Thread1.css';
import axios from 'axios';
import React, {useState} from "react";

const initialFormData = {
    author: "",
    author_comment: "",
    
  };

function Thread1(){ 
    const [formData, updateFormData] = React.useState(initialFormData);
    // this.state = {value:''}
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

   const handleChange = (event) =>{
        this.setState({value: event.target.value});
    }
    // const handleChange = (e) => {
    //     updateFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value(), //Causes error ("TypeError: e.target.value is not a function"), find how to store form data in React
    //     });
    //   };
    const handleSubmit = (event) => {event.preventDefault()


const body = new FormData();
body.append("author", FormData.author);
body.append("author_comment", FormData.author_comment)
fetch('http://localhost:8080/Thread1',{
   method: "post",
   body: body,
})
.then(function(response){
    return response.text();
})
.then(function (text){
    console.log(text);
})
.catch(function (error){
    console.error(error);
});
    };


    return(
        <body>
            <Header />
            <h1>Hello!</h1>
            <div>
                <p>I am having trouble with Java programming, can someone help me?</p>
                <form>
                    <label for="Name">Name</label> 
                    <input type = "text" name = "author" onChange={handleChange}
></input>
                    <br></br>
                    <label for="Comment">Comment</label><br></br>
                    <input type="text" name="author_comment" onChange={handleChange}
></input>
                    <br></br>
                    <input type="submit" onClick = {(event) => this.handleSubmit(event)}value="Submit"></input>
                </form>
                <div class="comments">
                </div>
            </div>
        </body>
    );
}


function addComment(comment){
  
        var commentHtml = `
        <div class="comment">
            <div class="top-comment">
                <p class="user">${comment.author}</p>
            </div>
            <p class="comment-ts">${new Date (comment.date).toLocaleString()}</p>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
        `
  
    
}
var comments = document.querySelector('.comments');

export default Thread1;
