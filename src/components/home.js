import React from "react";
import "../style/home.css";

const Home = () => {
  return (
    <div className="home-section" id="home-section">
      <div className="home-section-caption">
        <p className="text-center img">
          <img
            src="https://avatars2.githubusercontent.com/u/29349558?s=460&v=4"
            className="img-fulid rounded-circle wow bounceInDown"
            data-wow-duration="2s"
            data-wow-delay="1s"
            width="200"
            height="200"
            alt="Abhishek image"
          />
        </p>
        <p
          className="text-center my-name wow bounceInLeft"
          data-wow-duration="2s"
          data-wow-delay="1s"
        >
          Abhishek Raj Ravi
        </p>
        <div
          className="line wow zoomIn"
          data-wow-duration="2s"
          data-wow-delay="1s"
        ></div>
        <p
          className="text-center my-name-desc wow bounceInRight"
          data-wow-duration="2s"
          data-wow-delay="1s"
        >
          Front-End Developer <br /> I ❤ code
        </p>
      </div>
    </div>
  );
};

export default Home;
