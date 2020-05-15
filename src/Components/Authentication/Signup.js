import React from "react";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

function Signup() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn,
        } = context.state;
        console.log(context.state.username);
        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <div className="auth-form">
            {isLoggedIn ? (
              <div>
                <h1>Thanks for logging in! Profiles coming soon :)</h1>
                <Redirect to="/" />
              </div>
            ) : (
              <>
                <h2>Signup form</h2>
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
