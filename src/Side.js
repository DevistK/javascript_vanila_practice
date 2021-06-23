import React from "react";

function Side() {
  const sampleUrl = "#";
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href={sampleUrl}>신작 영화</a>
        </li>
        <li className="nav__item">
          <a href={sampleUrl}>트렌드</a>
        </li>
        <li className="nav__item">
          <a href={sampleUrl}>개봉 예정</a>
        </li>
        <li className="nav__item">
          <a href={sampleUrl}>좋아하는 영화</a>
        </li>
        <li className="nav__item">
          <a href={sampleUrl}>최근 본 영화</a>
        </li>
      </ul>
    </nav>
  );
}

export default Side;
