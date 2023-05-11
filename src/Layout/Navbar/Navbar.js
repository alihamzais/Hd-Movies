import React, { useState, useRef, useEffect } from "react";
import "./nav.css";
import GrassIcon from "@mui/icons-material/Grass";
import { Input, Button } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import Section from "../Section/Section";
import { Avatar } from "antd";

function Navbar() {
  const [inputvalue, setInputValue] = useState("");
  const [backgcolor, setBackGroundColor] = useState(true);
  const inputRef = useRef();
  const input = () => {
    setBackGroundColor(false);
  };
  useEffect(() => {
    function handleClick(event) {
      if (!event.target.closest(".input")) {
        setBackGroundColor(true);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [backgcolor]);

  return (
    <>
      <nav>
        <div className="flex_movie_logo">
          <GrassIcon id="movie_logo" />
          <div>
            {" "}
            <p style={{ textAlign: "center" }}>HD</p>
            <p>Movies</p>
          </div>
        </div>

        <div className="Screen_page">
          <div className="Router_page">Home</div>
          <div className="Router_page">Country</div>
          <div className="Router_page">Movies</div>
          <div className="Router_page">TV Shows</div>
          <div className="Router_page">Top IMBD</div>
        </div>
        <div id="flex_input">
          <Button
            style={
              backgcolor
                ? { backgroundColor: "#565c67", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
            className="input_icon"
            icon={<SearchOutlined />}
          />
          <Input
            ref={inputRef}
            style={
              backgcolor
                ? { backgroundColor: "#565c67", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
            placeholder="Basic usage"
            id="search_bar"
            className="input"
            onClick={input}
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div id="user">
          {/* <UserOutlined id="user_icon" /> */}
          <Avatar icon={<UserOutlined />} id="user_icon" />
          {/* <span>Login</span> */}
        </div>
      </nav>
      <Section />
    </>
  );
}

export default Navbar;
