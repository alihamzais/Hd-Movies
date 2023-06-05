import React, { useState, useEffect } from "react";
import "./nav.css";
import { Button, AutoComplete, Menu } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { apiData } from "../../MobxStore.js/MobxTree";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../firebaseAuth/Authentication";

function Navbar() {
  const [moviename, setMovieName] = useState("");
  const [isfalse, setIsFalse] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth(app);
  useEffect(() => {
    apiData.getApi();
  }, []);
  let dataAdd = apiData.arr.map((item) => ({
    ...item,
    backdrop_path: "https://image.tmdb.org/t/p/original/" + item.backdrop_path,
    poster_path: "https://image.tmdb.org/t/p/original/" + item.poster_path,
  }));

  let filter = dataAdd.map((item) => ({
    label: item.title,
    value: item.title,
  }));
  ////////////////// input search
  const searchBtn = () => {
    if (!moviename) {
      return false;
    }
    let matchmovie = dataAdd.find((item) => item.title === moviename);
    if (matchmovie === undefined) {
      navigate("/pagenotfound");
    } else {
      navigate("/moviedetails", { state: matchmovie });
    }
    setMovieName("");
  };

  useEffect(() => {
    function handleClick(event) {
      if (!event.target.closest(".input")) {
        setIsFalse(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isfalse]);

  ///////////////////// userl login and signout
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user, "///////userlogin");
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [auth]);
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button
          type="text"
          onClick={() => signOut(auth)}
          icon={<LogoutOutlined />}
          danger
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <nav>
        <div className="flex_movie_logo">
          <div>
            <p style={{ textAlign: "center" }}>HD</p>
            <p>Movies</p>
          </div>
        </div>

        <div className="Screen_page">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            <div className="Router_page">Home</div>
          </Link>
          <div className="Router_page">Country</div>
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
            <div className="Router_page">Movies</div>
          </Link>
          <div className="Router_page">TV Shows</div>
          <div className="Router_page">Top IMDB</div>
        </div>

        <div id="flex_input">
          <Button
            style={{ height: "30px", marginRight: "10px" }}
            className="input_icon"
            icon={<SearchOutlined />}
            onClick={searchBtn}
          />

          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            placeholder="write your favorit movie name"
            style={{ width: 250, color: "black", height: 40 }}
            options={isfalse ? filter : false}
            filterOption={true}
            value={moviename}
            className="input"
            onChange={(e) => {
              if (e === "") {
                setIsFalse(false);
              }
              setMovieName(e);
              setIsFalse(true);
            }}
          />
        </div>
        <div id="user">
          {user ? (
            <Dropdown
              overlay={menu}
              style={{ color: "white" }}
              trigger={["click"]}
            >
              <Avatar
                icon={user.email.slice(0, 1).toUpperCase()}
                id="user_icon"
              />
            </Dropdown>
          ) : (
            <Link to="/login">
              <Avatar icon={<UserOutlined />} id="user_icon" />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default observer(Navbar);
