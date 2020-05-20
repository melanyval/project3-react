import React from "react";

import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";
import "./Auth.css";
import Profile from './Profile';


function Signup() {

  function logout() {
    localStorage.clear();
    window.location.href = '/';
}

  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn,
        } = context.state;
        console.log(context);
        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <div>
            {isLoggedIn ? (
              <div>
                <h4>To create a new blog post, <span><Link to = "/createBlog">click here</Link></span></h4>
                <h4>To view and update your complete profile, <span><Link to = "/profile">click here</Link></span></h4>
                <button onClick = {logout}>
            Log out
            </button>
              </div>
            ) : (
              <>
                <h2>Signup</h2>
                <form onSubmit={handleSignupSubmit}>
                  <label htmlFor="username">
                    Username:
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={handleSignupInput}
                    />
                  </label>
                  <label htmlFor="email">
                    Email:
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleSignupInput}
                    />
                  </label>
                  <label htmlFor="password">
                    Password:
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleSignupInput}
                    />
                  </label>
                  <button>Signup</button>
                </form>
                {/* {message ? <div>{message}</div> : ''} */}
                {message && <div>{message}</div>}
              </>
            )}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Signup;