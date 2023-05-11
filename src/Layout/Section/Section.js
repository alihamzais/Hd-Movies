import React from "react";
import GrassIcon from "@mui/icons-material/Grass";
import "./section.css";
import { Button } from "antd";

function Section() {
  return (
    <section>
      <div className="flex_movie_logo_section">
        {/* <GrassIcon id="movie_logo_section" /> */}
        <div>
          {" "}
          <p style={{ textAlign: "center" }}>HD</p>
          <p>Movies</p>
        </div>
      </div>
      <h2 className="suggestion">Watch Online Movies Free</h2>
      <div className="How_to">
        <a href="" id="Hd_movies">
          Hd Movies
        </a>
        <a href="#Download_heading" id="Download">
          How to Download
        </a>
        <a href="" id="about_Hd">
          About us
        </a>
        <a href="" id="Online">
          Watch Online
        </a>
        <a href="" id="Fast_download">
          Fast Download
        </a>
      </div>
      <button className="go_home">Go To HomePage</button>
      <div className="download_discription">
        <p id="Download_heading">How to Download</p>
        <p style={{ textAlign: "center", width: "60%", margin: "auto" }}>
          "Looking to download your favorite movies quickly and easily? Look no
          further than [Name of HD Movies]. With our fast download speeds, you
          can get your hands on the latest releases in just a few clicks. Plus,
          with our secure and reliable downloading technology, you can rest
          assured that your files are safe and sound." "Tired of slow downloads
          and frustrating wait times? At [Name of HD Movies], we know how
          important it is to get your movies quickly. That's why we offer
          lightning-fast downloads that let you start watching your favorite
          films right away. Say goodbye to buffering and hello to hassle-free
          movie downloads!" Want to take your movies with you wherever you go?
          With [Name of HD Movies], you can download your favorite films to your
          device and watch them anytime, anywhere. Whether you're on a plane,
          train, or just hanging out at home, you'll never be without your
          favorite movies again."
        </p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
    </section>
  );
}

export default Section;
