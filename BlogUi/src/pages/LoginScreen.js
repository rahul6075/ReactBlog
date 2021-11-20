import React from "react";
import "../style/pages/LoginScreen.css";

function LoginScreen() {
  return (
    <div className="login">
      <div className="login_wraper">
        <h1 className="login_title">Login</h1>
        <form>
          <div className="form_details">
            <label>Email</label>
            <input type="email" placeholder="Email" className="form_input" />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form_input"
              autoComplete="false"
            />
            <button className="profile_submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
