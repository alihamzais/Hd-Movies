import React, { useEffect, useState } from "react";
import { Card, Pagination } from "antd";
import { apiData } from "../../MobxStore.js/MobxTree";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
function Home() {
  const [currentpage, setCurrentPage] = useState(0);
  const [nextData, setNextData] = useState(10);
  const navigate = useNavigate();
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "90vh",
    width: "100%",
  };
  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
  let dataAdd = apiData.arr.map((item) => ({
    ...item,
    backdrop_path: "https://image.tmdb.org/t/p/original/" + item.backdrop_path,
    poster_path: "https://image.tmdb.org/t/p/original/" + item.poster_path,
  }));

  useEffect(() => {
    apiData.getApi(1);
  }, []);

  const movieData = (value) => {
    navigate("/moviedetails", { state: value });
  };
  const handleChange = (e) => {
    if (e === 2) {
      apiData.getApi(1);

      setCurrentPage(10);
      setNextData(20);
    } else if (e === 3) {
      apiData.getApi(2);
      setCurrentPage(0);
      setNextData(10);
    } else if (e === 4) {
      apiData.getApi(2);
      setCurrentPage(10);
      setNextData(20);
    } else if (e === 1) {
      apiData.getApi(1);
      setCurrentPage(0);
      setNextData(10);
    }
  };
  return (
    <>
      <div className="slide-container">
        <Slide>
          {dataAdd.slice(1, 5).map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.backdrop_path})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      {apiData.loader ? (
        <Spin
          indicator={antIcon}
          style={{
            display: "block",
            margin: "auto",
            width: "fit-content",
            backgroundColor: "white",
          }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            gridTemplateColumns: "auto auto auto auto",
            backgroundColor: "#495057",
            padding: "10px",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {dataAdd.slice(currentpage, nextData).map((item) => {
            return (
              <Card
                onClick={() => movieData(item)}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={item.backdrop_path} />}
              >
                <p>{item.title.slice(0,20)}...</p>
                <p>{item.overview.slice(0, 100)}...</p>
              </Card>
            );
          })}
        </div>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "rgb(73, 80, 87)",
        }}
      >
        <Pagination defaultCurrent={1} total={40} onChange={handleChange} />
      </div>
    </>
  );
}

export default observer(Home);
