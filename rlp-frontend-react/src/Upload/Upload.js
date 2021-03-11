import './Upload.css';
import React, {Component} from "react";
import axios from 'axios';
import Header from '../Header/Header';
import uploadimg from './Upload_photo.png'

export default function App() {
  const [file, setFile] = React.useState("");
  const [output, message] = React.useState("");

const handleChange = event => setFile(event.target.files[0]);

  const handleSubmit = event => {
    const data = new FormData();
    data.append("file", file);

    axios({
      method: 'post',
      url: '/uploadFiles',
      
      data: data

    }).then(res => {
      console.log(res);
      message(res.data.message);
    });
  }


  return (
      <div>
        <Header />

    <div className="container">
      <header className="upload">
          <div>
              <img src={uploadimg} alt="Upload Photo">
              </img>
          </div>
        <h1>
          Upload and Share Files
        </h1>
        <div className="form">
          <input type= "file" multiple onChange={handleChange} />
          &nbsp;
          <button className="upload button" onClick={handleSubmit}>
              Upload File
          </button>
        </div>
        <div className="box">
          <p>{output}</p>
        </div>
      </header>
    </div>
    </div>

  );
}


