import React from "react";
import "./Home.css";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

import Blogs from "../Blog/Blogs";

const Home = () => {

  return (
    <div className="Home">
      <Blogs />
      <div className="auth">
        <Login />
      </div>
    </div>
  );
};

export default Home;