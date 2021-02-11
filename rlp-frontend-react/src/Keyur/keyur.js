import './keyur.css';
import axios from 'axios';
import Header from '../Header/Header';
import avatar1 from './041-man.png';

function Keyur(){
  return(
    <div>
    <Header/>
      <body>
      <div className="info-container">
          <div className="About-Us-info">
          <h1>
                Keyur
          </h1>
          <h2>
                Second year student studying Computer Science<br></br>at Brunel University London<br></br>
          </h2>
          </div>
      </div>
      </body>
    </div>
  )
}

export default Keyur;
