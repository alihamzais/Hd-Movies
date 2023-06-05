import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "antd";
import "./movieDetail.css";
import { Button } from "antd";
import { StarOutlined, DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { apiData } from "../../MobxStore.js/MobxTree";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
function MoviesDetails() {
  const navigate = useNavigate();
  const [score, setScore] = useState(7);
  let location = useLocation();
  let data = location.state;
  console.log(location);
  useEffect(() => {
    apiData.getApi();
  }, []);
  let allMovies = apiData.arr.map((item) => ({
    ...item,
    backdrop_path: "https://image.tmdb.org/t/p/original/" + item.backdrop_path,
    poster_path: "https://image.tmdb.org/t/p/original/" + item.poster_path,
  }));
  const replaceData = (value) => {
    navigate("/moviedetails", { state: value });
  };
  return (
    <>
      <div className="container_movie">
        <div className="poster">
          <div className="movie_img_container">
            <img
              width="100%"
              height="100%"
              src={data.poster_path}
              style={{ borderRadius: "10px" }}
              alt="beautiful"
            />
          </div>
        </div>
        {/* ///////////////// */}
        <div className="content_movie">
          <div className="ghost_btn">
            <div>
              <h1 style={{ color: "#343a40" }}>{data.title}</h1>
            </div>
            <p
              style={{
                width: "fit-content",
                marginTop: "5px",
                marginRight: "5px",
              }}
            >
              Score:{score}
            </p>

            <div>
              <Button
                className="likeDislikeBtn"
                onClick={() =>
                  score === 7
                    ? setScore(score + 1)
                    : score === 6
                    ? setScore(score + 1)
                    : score
                }
              >
                <LikeOutlined />
              </Button>

              <Button
                className="likeDislikeBtn"
                onClick={() =>
                  score === 7
                    ? setScore(7)
                    : score === 8
                    ? setScore(score - 1)
                    : score
                }
              >
                {" "}
                <DislikeOutlined />
              </Button>
            </div>
          </div>
          {/* ////////////// */}
          <div className="rating">
            <h3 style={{ color: "#343a40" }}>HD</h3>
            <p>
              {data.vote_average}
              <span style={{ marginLeft: "5px" }}>
                <StarOutlined />
              </span>
            </p>
          </div>
          <div style={{ marginTop: "10px", color: "#181c20" }}>
            "Die Hard": A New York cop fights off a group of terrorists who have
            taken over a high-rise building. "The Dark Knight": Batman faces off
            against the Joker, a sadistic criminal mastermind, in a battle for
            Gotham City. "Mad Max: Fury Road": In a post-apocalyptic wasteland,
            Max Rockatansky teams up with Imperator Furiosa to overthrow a
            tyrannical warlord.
          </div>
          <div className="movie_documentry">
            <h2 style={{ color: "#343a40" }}>Country:</h2>
            <p>United State Of America</p>
          </div>
          <div className="movie_documentry">
            <h2 style={{ color: "#343a40" }}>Genre:</h2>
            <p>Documentry</p>
          </div>
          <div className="movie_documentry">
            <h2 style={{ color: "#343a40" }}>Release Date:</h2>
            <p>{data.release_date}</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ textAlign: "center", color: "#343a40" }}>HD Movies</h2>
            This will help your visitors get insights into the making of their
            favorite movies. Movie trivia: You can create quizzes and trivia
            games about movies. This will keep your visitors engaged and
            entertained.
          </div>
        </div>
        {/* //////////////// */}
        <div className="api_call">
          <h1 id="api_heading" style={{ color: "#343a40" }}>
            You may also like
          </h1>
          <div className="grid_template">
            {allMovies.slice(0, 12).map((item, index) => {
              return (
                <Image
                  width={100}
                  preview={false}
                  src={item.poster_path}
                  style={{ cursor: "pointer" }}
                  onClick={() => replaceData(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(MoviesDetails);
