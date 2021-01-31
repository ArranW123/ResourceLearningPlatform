import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './Header.css';
import logo from './Logo.png'
function Header(){
    return(
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="RLP Logo">
                    </img>
                </div>
                <div>
                <Link to={'/'} className="homebtn">Home</Link>
                &nbsp;
                &nbsp;
                <Link to={'/upload'} className="uploadbtn">Upload</Link>
                &nbsp;
                &nbsp;
                <Link to={'/download'} className="downloadbtn">Download Resources</Link>
                </div>
                <div>
                <a class="loginbtn" href="">Login</a>
                &nbsp;
                <a class="signupbtn" href="">SignUp</a>
                &nbsp;
                </div>
            </div>

    );
}

export default Header;
