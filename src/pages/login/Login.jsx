import React, { useRef, useState } from "react";
import "./login.scss";
const Login = () => {
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
        <h1>Unlimited Movies,TV shows and Many more</h1>
        <h2>Wtach anywhere,Cancel anytime</h2>
        <p>
          Ready to waych Enter Your mail to create or restart your membership
        </p>
      </div>
    </div>
  );
};

export default Login;
