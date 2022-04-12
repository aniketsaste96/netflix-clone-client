import React, { useRef, useState, useContext } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();

    login({ email, password }, dispatch);
    // try {

    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign Up Now</b>{" "}
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot <b>Learn More</b>{" "}
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
