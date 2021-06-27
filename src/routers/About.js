import React from "react";
import Header from "../components/Header";
import Side from "../components/Side";
function About(props) {
  return (
    <div className="inner">
      <Header />
      <div className="inner__wrap">
        <Side />
        <div className="movies">
          <h2 className="movies__title">MovieFlix 소개</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
