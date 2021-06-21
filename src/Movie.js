import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <img src={poster} alt={title} title={title}></img>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number,
  year: propTypes.number,
  title: propTypes.string,
  summary: propTypes.string,
  poster: propTypes.string,
};

export default Movie;
