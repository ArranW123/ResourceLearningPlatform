import './Download.css';
import axios from 'axios';
import Header from '../Header/Header';
import download from './download.png';
import Loader from 'react-loader-spinner';
import React, {useEffect} from "react";
import {render} from 'react-dom';
import chemistry from './chemistry.png';
import maths from './Math.png';
import ComputerScience from './cs.png';
import RecentFiles from './Recentfiles.png';



function Download(){
    

    const [data,fileInfos] = React.useState([]);

    useEffect(()=>{
        axios({
          method: 'get',
          url: '/files',  
        //   responseType: 'blob',
        //   headers: {
        //       'Content-Type': 'application/pdf',
        //     },
      }).then(response=>{
        console.log(response);
        fileInfos(response.data);
        });
    },[]);

    
    const handleSubmit = event => {
      axios({
        method: 'get',
        url: '/files/2',
        responseType: 'blob',
        headers: {
            'Content-Type': 'application/pdf',
          },
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ComputerScience.pdf');
        document.body.appendChild(link);
        link.click();
        });
    }

    return(
        
        <div>
            <Header />
            <div className="page-container">
                <div className="Download-info">
            <h1>
                Study resources available to support your teaching
            </h1>
            <h2>
                Our tutors have uploaded learning materials <br></br>for various subjects to help with your remote learning.<br></br>
            </h2>
            </div>
            <div className="img">
                <img src={download} alt="download photo">               
                </img>
            </div>
            </div>

              <div className="resources">
                  <h1>
                      Download your resources below
                  </h1>
                  {/* <a href="http://localhost:8080/files/2" target='_blank' >Database File </a>
                  <button className="btn" onClick={handleSubmit} >Download File </button>

                  <a href="https://chemrevise.files.wordpress.com/2019/12/1.1-revision-guide-atomic-structure-aqa.pdf" target='_blank'>1.1 revision guide Atomic Structure </a> */}
              </div>
              <div className="files">
                <div className="chem">
                <h1> Chemistry </h1>
                <div className="body">
                  <div className="links">
                  <a href="http://localhost:8080/files/1">1. Atomic Structure </a>
                  {/* <p> Atoms consist of a nucleus containing protons and neutrons, surrounded by electrons in shells. 
                    <br></br>The numbers of subatomic particles in an atom can be calculated from its atomic number and mass number.
                    <br></br>Click above to learn more</p> */}
                   <br/>
                  <a href="http://localhost:8080/files/2" target='_blank' >2. Reaction Kinetics</a>
                  <br/>
                  <a href="http://localhost:8080/files/3" target='_blank' >3. Thermodynamics</a>
                  </div>
                  <img className="chem-img" src={chemistry} alt="Chemistry Photo"></img>
                </div>
                </div>

                <div className="maths">
                  <h1>Mathematics</h1>
                  <div className="body">
                  <div className="links">
                  <a href="http://localhost:8080/files/1">1. Exponentials and Logarithms </a>
                  <br/>
                  <a href="http://localhost:8080/files/1">2. Equations and Inequalites </a>
                  <br/>
                  <a href="http://localhost:8080/files/1">3. The Binomial Expansion </a>
                 </div>
                 <img className="math-img" src={maths} alt="Maths Photo"></img>
                 </div>
                </div>

                <div className="cs">
                  <h1>Computer Science</h1>
                  <div className="body">
                  <div className="links">
                  <a href="http://localhost:8080/files/1">1. Introduction to Computer Systems </a>
                  <br/>
                  <a href="http://localhost:8080/files/1">2. Principles of Programming </a>
                  <br/>
                  <a href="http://localhost:8080/files/1">3. Algorithms and Data Structures </a>
                 </div>
                 <img className="cs-img" src={ComputerScience} alt="Programming Photo"></img>
                 </div>
                </div>

                <div className="recent-upload">
                  <h1>Recently Uploaded Files</h1>
                  <div className="body">
                  <div className="links">
                  {
                    data?.map((file, index) => (
                      <li className="list" key={index}>
                      <a href={file.url}>{file.docName}</a>
                      </li>
                    ))}
                 </div>
                 <img className="recent-upload-img" src={RecentFiles} alt="Upload Photo"></img>
                 </div>
                </div>
              </div>
{/* 
            <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {
              data?.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.docName}</a>
                </li>
              ))}
          </ul>
        </div> */}

            <div className="feedback">
                <h3>
                Hello, we'd love to hear your feedback about our resources !!
                </h3>
                <div className="">
                <a href = "mailto:rlp@example.com?subject = Feedback"> <button>Send Feedback</button></a>
                </div>
            </div>
        </div>

    );
              }

export default Download;