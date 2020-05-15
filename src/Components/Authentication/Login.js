import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";
import "./Auth.css";

// import './LoginForm.css'

export const UserLogin = (props) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formSignup: { email, password },
          message,
          isLoggedIn,
        } = context.state;

        const { handleSignupInput, handleLoginSubmit } = context;
        return (
          <div className="auth-form">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <>
                <h2>Login form</h2>
                <form onSubmit={handleLoginSubmit}>
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
                  <button>Log In</button>
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
};

export default UserLogin;
