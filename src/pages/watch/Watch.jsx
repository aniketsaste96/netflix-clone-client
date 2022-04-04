import React from "react";

import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://youtu.be/BsDoLVMnmZs"
        className="video"
        autoPlay
        progress
        controls
      />
    </div>
  );
};

export default Watch;
