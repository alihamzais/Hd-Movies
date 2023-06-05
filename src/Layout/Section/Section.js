import React from "react";
import "./section.css";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

function Section() {
  let navigate = useNavigate();

  const dataNavigate = () => {
    navigate("/home");
  };

  return (
    <section>
      <div className="flex_movie_logo_section">
        <div>
          {" "}
          <p style={{ textAlign: "center" }}>HD</p>
          <p>Movies</p>
        </div>
      </div>
      <h2 className="suggestion">Watch Online Movies Free</h2>
      <div className="How_to">
        <a href="#asc" id="Hd_movies">
          Hd Movies
        </a>
        <a href="#Download_heading" id="Download">
          How to Download
        </a>
        <a href="#ads" id="about_Hd">
          About us
        </a>
        <a href="#as" id="Online">
          Watch Online
        </a>
        <a href="#as" id="Fast_download">
          Fast Download
        </a>
      </div>

      <button className="go_home" onClick={dataNavigate}>
        Go To HomePage
      </button>

      <div className="download_discription">
        <p id="Download_heading">About Hd Movies</p>
        <p
          style={{
            textAlign: "center",
            width: "60%",
            margin: "auto",
            fontSize: "1.2rem",
            marginTop: "5px",
          }}
        >
          Top-rated movies: You can create lists of the top-rated movies in
          different categories like action, drama, comedy, horror, etc. This
          will help your visitors find the best movies to watch. Movie news and
          updates: You can share the latest news and updates about the movie
          industry, including new releases, upcoming movies, and
          behind-the-scenes information. Interviews: You can interview
          directors, producers, and actors from popular movies. This will help
          your visitors get insights into the making of their favorite movies.
          Movie trivia: You can create quizzes and trivia games about movies.
          This will keep your visitors engaged and entertained. User-generated
          content: You can encourage your visitors to submit their own movie
          reviews or create their own movie lists. This will help build a
          community around your website and increase user engagement.
        </p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
    </section>
  );
}

export default observer(Section);
