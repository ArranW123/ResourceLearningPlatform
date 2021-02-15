import './Download.css';
import axios from 'axios';
import Header from '../Header/Header';
import download from './download.png';

function Download(){
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
                {/* Add pdf view code here after the backend conflict fix */}
            </div>

            <div className="feedback">
                <h3>
                We’d love to learn more about your students’ needs
                </h3>
                <div className="">
                <button>Email Us</button>
                </div>
            </div>
        </div>

    );
}

export default Download;