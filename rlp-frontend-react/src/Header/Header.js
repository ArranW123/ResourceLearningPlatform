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
                &nbsp;
                &nbsp;

                <Link to={'/about'} className="aboutbtn">About</Link>
                &nbsp;
                &nbsp;
                <Link to={'/Forum'} class="forumbtn" href="">Forum </Link>

                </div>
                <div>
                <Link to={'/login'} class="loginbtn" href="">Login </Link>
                &nbsp;
                <Link to={'signup'} class="signupbtn" href="">SignUp </Link>
                &nbsp;
                </div>
            </div>

    );
}

export default Header;
