import React from "react";
import "./Home.css";

import Signup from "../Authentication/Login";
import Login from "../Authentication/Signup";

import Blogs from "../Blog/Blogs";

const Home = () => {
  return (
    <div className="Home">
      <Blogs />
      <div className="auth">
        <Signup />
        <Login />
      </div>
    </div>
  );
};

export default Home;
