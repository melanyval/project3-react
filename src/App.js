import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home";

//import Navbar from "./Components/Navbar/Navbar";

import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";

import Blogs from "./Components/Blog/Blogs";
import CreateBlog from "./Components/Blog/CreateBlog";
import SingleBlog from "./Components/Blog/SingleBlog";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blogs/:id" component={SingleBlog} />
          <Route exact path="/createBlog" component={CreateBlog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
