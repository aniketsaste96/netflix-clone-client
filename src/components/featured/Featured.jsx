import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src="https://cdn.wallpapersafari.com/23/89/3Ubpz0.jpg" alt="" />
      <div className="info">
        <img height="30px" src="" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          quo rerum magnam asperiores id pariatur quae sunt tempore quam ipsam
          sit nihil consequuntur, non ullam odio dolore minus ipsa tempora,
          dolores esse placeat, provident consequatur. Sit illum sed repellat
          consectetur.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
