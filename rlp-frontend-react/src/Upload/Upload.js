import './Upload.css';
import React, {Component} from "react";
import axios from 'axios';
import Header from '../Header/Header';
import uploadimg from './Upload_photo.png'

export default function App() {
  const [output, setOutput] = React.useState("");
  const [file, setFile] = React.useState("");

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
      setOutput(res.status === 200 ? "successfully added" : "Upload failed");
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
          <input type= "file" onChange={handleChange} />
          &nbsp;
          <button className="btn" onClick={handleSubmit}>
              Upload File
          </button>
        </div>
      </header>
    </div>
    </div>

  );
}


