import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../../../Header/Header';
import './Thread1.css';
import axios from 'axios';
import React, { useState } from "react";
//import React, {useState} from "react";

const initialFormData = {        
    author: "",
    author_comment: "",           

  };

function Thread1(){ 
    const [formData, updateFormData] = React.useState(initialFormData);
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [commentValue, setcommentValue] = useState('');
    const [authorValue, setauthorValue] = useState('');
    
    //  this.state = {value:''}
    //  this.onChange = this.handleChange.bind(this);
    //  this.onSubmit = this.handleSubmit.bind(this);

//    const handleChange = (event) =>{
//         this.setState({value: event.target.value});
//     }
    
    // const onChange = (e) =>{
    //    this.state({[e.target.name]: e.target.value});
    // }
    const onSubmit = (e) =>{
        e.preventDefault();
        // let comment = {author: this.state.author, author_comment: this.state.author_comment}
        const {author, author_comment} = this.state;
        axios.post('/',{author, author_comment})
         .then((result)=>{
            //updateFormData(response.FormData);
        });
        
    }
    const onChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value, //Causes error ("TypeError: e.target.value is not a function"), find how to store form data in React
        });
      };

const handleContentChange = event => setInput(event.target.value);

const handleSubmit = (event) => {
console.log(authorValue);
console.log(commentValue);
event.preventDefault()
const toInput  = {input};
axios({
    method: 'post',
    url: '/Thread1',
    data:{
        text: toInput.input,
    }
}) .then(res => {
    console.log(res);
    setOutput(res.status === 200 ? "Comment saved" : "Comment cannot save");
});

// const body = new FormData();
// body.append("author", FormData.author);
// body.append("author_comment", FormData.author_comment)
// fetch('/Thread1',{
//    method: "post",
//    body: body,
// })

// .then(function(response){
//     return response.text();
// }.bind(this))

// .then(function (text){
//     console.log(text);
// })
// .catch(function (error){
//     console.error(error);
// });

};


    return(
        <body>
            <Header />
            <h1>Hello!</h1>
            <div>
                <p>I am having trouble with Java programming, can someone help me?</p>
                <form>
                    <label for="Name">Name</label> 
                    <input type = "text" name = "author" value = {authorValue} onChange={(e) => setauthorValue(e.target.value)}
></input>
                    <br></br>
                    <label for="Comment">Comment</label><br></br>
                    <input type="text" name="author_comment" value = {commentValue} onChange={(e) => setcommentValue(e.target.value)}
></input>
                    <br></br>
                    <input type="submit" onClick = {handleSubmit} value="Submit"></input>
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
            <p class="comment-ts">${new Date(comment.date).toLocaleString()}</p>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
        `;
}
var comments = document.querySelector(".comments");

export default Thread1;