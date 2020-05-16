import React from "react";
import "./Auth.css";

export const Profile = (props) => {
  return (
    <div className = "profile-card">
      <h1>{props.username}'s profile</h1>
      <img width = "100px" src = "https://cdn.onlinewebfonts.com/svg/img_206976.png"></img>
  <p>Email: {props.email}</p>
    </div>
  );
};

export default Profile;