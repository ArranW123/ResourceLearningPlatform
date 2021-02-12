import "./Login.css";
import React, {Component} from "react";
import Header from "../Header/Header";
import axios from "axios";
import { Redirect } from "react-router-dom";


function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState(null);

  React.useEffect(() => {
      if(sessionStorage.getItem("user"))
      {
        return <Redirect to="/profile" />
      }
   
  })

  const loginUser = (e) => {
    e.preventDefault();

    if(email === "" || password === "") {
        setError("Fill both fields")
    }
    else {
        setError(null)
        const loginApi = `http://localhost:8080/authenticate`;
      axios
        .post(loginApi, {
          email: email,
          password: password,
        })
        .then(
          (response) => {
            sessionStorage.setItem("user",JSON.stringify(response))
            window.location.href="/profile"
          },
          (error) => {
            setError(error.response.data.message);
          }
        );
    }

  };

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
      <div className="login">
        <form>
          <div className="row">
            <div className="col-sm-6 col-lg-12">
              <div className="form-group">
                <label  htmlFor="email">Email</label>
                <input
                  className="form-control"
                  onChange={onChange}
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="col-sm-6 col-lg-12">
              <div className="form-group">
              <label htmlFor="password">Password</label>
                <input
                  path="subject"
                  onChange={onChange}
                  className="form-control"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
           <center><button
              type="submit"
              onClick={loginUser}
              className="button button-contactForm btn_4 boxed-btn btn btn-success"
            >
              Login
            </button></center> 
          </div>
         { error ? 
          <div className="error">
             <center><p className="bg-danger">{error}</p></center> 
          </div> : '' 
         }
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
