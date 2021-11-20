import React, { useState } from "react";
import "../style/pages/LoginScreen.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/userapiCalls";

function SignupScreen() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { name, email, password } = formData;
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    login(dispatch, { name, email, password });
    // const res =await axios.post( "/api/users/register", { name, email, password } );
    // console.log(res);
  };

  return (
    <div className="login">
      <div className="login_wraper">
        <h1 className="login_title">SignUp</h1>
        <form onSubmit={onSubmit}>
          <div className="form_details">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form_input"
              name="name"
              value={name}
              onChange={onChange}
            />
            <label>Email</label>
            <input
              type="email"
              className="form_input"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form_input"
              autoComplete="false"
              name="password"
              value={password}
              onChange={onChange}
            />
            <button type="submit" className="profile_submit">
              SignUp
            </button>
            <span className="link">
              Already Signup? <a href="/login">Login</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupScreen;
