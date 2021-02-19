import "./Signup.css";
import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import { Redirect } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  React.useEffect(() => {
    if(sessionStorage.getItem("user"))
    {
      return <Redirect to={"/profile"} />
    }
 
})

  const registerUser = (e) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      firstname === "" ||
      lastname === ""
    ) {
      setError("Fill all fields");
    } else {
      setError(null);
      const registerApi = `http://localhost:8080/registerProcess`;
      axios
        .post(registerApi, {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        })
        .then(
          (response) => {
            setSuccess(response.data.message);
            setError(null);
          },
          (error) => {
            setError(error.response.data.message);
            setSuccess(null);
          }
        );
    }
  };

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "firstname") {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="register">
          <form>
            <div className="row">
              <div className="col-sm-6 col-lg-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
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

              <div className="col-sm-6 col-lg-12">
                <div className="form-group">
                  <label htmlFor="password">First Name</label>
                  <input
                    path="subject"
                    onChange={onChange}
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    type="firstname"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-lg-12">
                <div className="form-group">
                  <label htmlFor="password">Last Name</label>
                  <input
                    path="subject"
                    onChange={onChange}
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    type="lastname"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <center>
                <button
                  type="submit"
                  onClick={registerUser}
                  className="button button-contactForm btn_4 boxed-btn btn btn-success"
                >
                  Register
                </button>
              </center>
            </div>
            {error ? (
              <div className="error">
                <center>
                  <p className="bg-danger">{error}</p>
                </center>
              </div>
            ) : (
              ""
            )}

            {success ? (
              <div className="success">
                <center>
                  <p className="bg-success">{success}</p>
                </center>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
