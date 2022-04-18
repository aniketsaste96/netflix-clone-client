import React, { useRef, useState, useContext } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
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
            defaultValue="aniketsaste96@gmail.com"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue="123456"
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?{" "}
            <b onClick={() => history.push("/register")}>Sign Up Now</b>{" "}
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
