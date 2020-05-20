import React from "react";
import "./Auth.css";
import axios from "axios";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";

export const ProfilePage = (props) => {
  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    service
      .get(baseURL + "/api/isLoggedIn")
      .then((userdata) => {
        setUser(userdata.data.user);
      })
      .catch((error) => console.log(error));
  }, []);

  function deleteAccount(e) {
    e.preventDefault();

    service
      .post("/api/deleteAccount")
      .then((message) => {
        console.log(message);
        window.location = "/";
      })
      .catch((err) => {
        throw err;
      });
  }

  function getDetails() {
    return (
      <div>
        <img
          width="100px"
          src="https://cdn.onlinewebfonts.com/svg/img_206976.png"
        ></img>
        <div className="details">
          <h1>{user.username}'s profile</h1>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
          <p>Bio: {user.bio}</p>
        </div>

        <form onSubmit={deleteAccount}>
          <button>Delete account</button>
        </form>
      </div>
    );
  }

  return (
    <div className="profile-card">
      {user.username ? (
        <div>
          <ul>
            <li>
              <span>
                <Link to="/">Click here</Link>
              </span>{" "}
              to return to the blogs page
            </li>
            <li>
              <span>
                <Link to={{
                  pathname: "/editProfile",
                  state: {
                    user: user
                  }
              }}>Click here </Link>
              </span>
              to update your account information
            </li>
          </ul>
          {getDetails()}
        </div>
      ) : (
        <div>
          <h2>You are not logged in. Please do so to view your profile.</h2>
          <h4>
            <Link to="/">Click here </Link>
            to return to the blogs page
          </h4>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;