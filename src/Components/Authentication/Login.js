import React from "react";
import "./Auth.css";
import axios from "axios";
import AUTH_SERVICE from "../../services/AuthService";
import Profile from "./Profile";
import Signup from "./Signup";
import { Link } from "react-router-dom";

// import './LoginForm.css'

export const UserLogin = (props) => {
  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });

  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState([]);

  React.useEffect(() => {
    console.log("email: ", email);
    console.log("password: ", password);
  }, []);

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(baseURL + "/api/login", { email, password })
      .then((userdata) => {
        console.log(userdata);
        window.alert("You have successfully logged in. Welcome!");
        //window.location = "/";
        setUser({
          username: userdata.data.user.username,
          email: userdata.data.user.email,
        });
        setLoggedIn(true);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="auth-form">
        {loggedIn == true ? (
          <div>
            <Profile username={user.username} email={user.email} />
          </div>
        ) : (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button>Log in</button>
            </form>
          </>
        )}
      </div>
      <div className="auth-form">
        {loggedIn == true ? (
          <div>
            <h4>
              To create a new blog post,{" "}
              <span>
                <Link to="/createBlog">click here</Link>
              </span>
            </h4>
            <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <Signup />
        )}
      </div>
    </>
  );
};

export default UserLogin;
