import React, { useState } from "react";
import "./listitem.scss";
import {
  PlayArrow,
  ThumbUpAltOutlined,
  Add,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://vimeo.com/253484691";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://wallpapercave.com/wp/wVMsPCF.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop controls />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              consequatur earum incidunt nam quam odit asperiores.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
