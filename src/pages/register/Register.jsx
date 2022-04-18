import React, { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const history = useHistory();

  const handleStart = () => {
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post(
        "https://netflix-clone-mern-project.herokuapp.com/api/auth/register",
        { email, username, password }
      );
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Button
            className="loginButton"
            onClick={() => history.push("/login")}
            style={{ cursor: "pointer" }}
          >
            Sign Inn
          </Button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies,TV shows and Many more</h1>
        <h2>Wtach anywhere,Cancel anytime</h2>
        <p>
          Ready to watch Enter Your mail to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="username" ref={usernameRef} />

            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
