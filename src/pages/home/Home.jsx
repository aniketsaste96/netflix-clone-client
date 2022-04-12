import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        // we need token
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGQxYWZkMDEyMTY4Mzc2MDhlNzVkOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDkyMjA0MDksImV4cCI6MTY0OTY1MjQwOX0.dJLgIEUV775QgiXNaCdNmpvKiDdoxZDvslZzRt_0nw0",
            },
          }
        );
        setLists(res.data);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
