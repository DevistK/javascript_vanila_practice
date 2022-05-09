import React from "react";
import { Link } from "react-router-dom";

function Side() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">영화 리스트</Link>
        </li>
        <li className="nav__item">
          <Link to="/about">MovieFlix 소개</Link>
        </li>
        <li className="nav__item">
          <Link to="">개봉 예정</Link>
        </li>
        <li className="nav__item">
          <Link to="">좋아하는 영화</Link>
        </li>
        <li className="nav__item">
          <Link to="">최근 본 영화</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Side;
