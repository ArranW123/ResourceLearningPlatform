import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from '../../../Header/Header';
import './Thread1.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
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
    const [responseData, setresponseData] = useState('');
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
    url: '/Thread',
    data:{
        author: authorValue, //toInput.input,
        author_comment: commentValue,
    }
}) .then(res => {
    console.log(res);
    setOutput(res.status === 200 ? "Comment saved" : "Comment cannot save");
});

};
const[data, info] = React.useState([]);
useEffect(()=>{
        axios({
            method: 'get',
            url: '/getComment',
            headers:{
                
            }
        }).then(response=>{
            console.log(response);
            info(response.data);
        });
    },[]);
  

    return(
        <body>
            <Header />
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
                    <div>

                    </div>
                </div>
            </div>
        </body>
    );
}


export default Thread1;