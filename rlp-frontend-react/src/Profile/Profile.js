import React from "react";
import Header from "../Header/Header";
import instance from "../axios_interceptor";
import {Modal,Button} from 'react-bootstrap'

function Profile() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [email, setEmail] = React.useState(
    user.data.user.student.studentEmailAddress
  );
  const [password, setPassword] = React.useState(
    user.data.user.student.password
  );
  const [firstname, setFirstName] = React.useState(
    user.data.user.student.studentFirstName
  );
  const [lastname, setLastName] = React.useState(
    user.data.user.student.studentLastName
  );
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const [show, setShow] = React.useState(false);

  const [InactivateModal, setInactivateModal] = React.useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleInactivateModalClose = () => setInactivateModal(false)
  const handleInactivateModalShow = () => setInactivateModal(true)

  const deleteAccount = (e) => {
      e.preventDefault();
      const session= JSON.parse(sessionStorage.getItem("user"))
      const userId = session.data.user.student.studentID;
      const deleteUserApi = `user/deleteUser/${userId}`;
      instance
      .get(deleteUserApi)
      .then(
        (response) => {
          sessionStorage.clear();
          setError(null);
          window.location.href="/login"
        })

  }

  const inactivateAccount = (e) => {
    e.preventDefault();
    const session= JSON.parse(sessionStorage.getItem("user"))
    const userId = session.data.user.student.studentID;
    const inactivateUserApi = `/user/toggleUser/${userId}`;
    instance
    .get(inactivateUserApi)
    .then(
      (response) => {
        sessionStorage.clear();
        setError(null);
        window.location.href="/login"
      })

}


  const updateProfile = (e) => {
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
      const updateProfileApi = `user/updateProfile`;
      instance
        .post(updateProfileApi, {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        })
        .then(
          (response) => {
            setSuccess(response.data.message);
            const session= JSON.parse(sessionStorage.getItem("user"))
            const data = {
              data: {
                jwttoken : session.data.jwttoken,
                user: {
                  student: {
                      activeStatus: response.data.responseObject.activeStatus,
                      password: response.data.responseObject.password,
                      studentEmailAddress: response.data.responseObject.studentEmailAddress,
                      studentFirstName: response.data.responseObject.studentFirstName,
                      studentID: response.data.responseObject.studentID,
                      studentLastName: response.data.responseObject.studentLastName,
                  },
                },
              },
            };
            sessionStorage.setItem("user",JSON.stringify(data));
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
                    value={email}
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
                    value={password}
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
                    value={firstname}
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
                    value={lastname}
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
                  onClick={updateProfile}
                  className="button button-contactForm btn_4 boxed-btn btn btn-success"
                >
                  Update Profile
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
          <div className="row">
              <div className="col-lg-6">
                <button onClick={handleInactivateModalShow} className="btn btn-warning">Deactivate Account</button>
              </div>
              <div className="col-lg-6">
                <button onClick={handleShow} className="btn btn-danger">Delete Account</button>
              </div>
            </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account? This action is irreversible</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteAccount}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={InactivateModal} onHide={handleInactivateModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Deactivate</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to deactivate your account? Only Admin can reactivate it</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleInactivateModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={inactivateAccount}>
            Deactivate
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
