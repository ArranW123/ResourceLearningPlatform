import './ahmed.css';
import axios from 'axios';
import Header from '../Header/Header';
import avatar1 from './013-man.png';
//import Data from "./data.json"

function Ahmed(){
  return(
    <div>
    <Header/>
      <body>
      <div className="info-container">
          <div className="About-Us-info">
          <h1>
                Ahmed
          </h1>
          <h2>
                Second year student studying Computer Science<br></br>at Brunel University London<br></br>
          </h2>
          <h3>
                ahmed_paragraph
          </h3>
          </div>
      </div>
      </body>
    </div>
  )
}

export default Ahmed;
