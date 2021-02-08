import {Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './Header.css';
import logo from './Logo.png'
function Header(){

    const signOut=()=>{
        sessionStorage.clear();
        window.location.href="/login"

    }
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
                {!sessionStorage.getItem("user") ? 
                <div>
               
                <Link to={'/login'} className="loginbtn" href="">Login </Link>
                 &nbsp;
                <Link to={'signup'} className="signupbtn" href="">SignUp </Link>
                &nbsp; 
                </div>: <div><Link to={'/profile'} className="profilebtn" href="">Profile </Link>
                 &nbsp; 
                 <button onClick={signOut} className="signoutbtn" href="">SignOut </button>
                 &nbsp; 
                 
                 
                 </div> }
            </div>

    );
}

export default Header;
