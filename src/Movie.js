import React from "react";
import propTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <span className="movie__rating">{rating}</span>
        <img src={poster} alt={title} title={title}></img>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        {/* <p className="movie__summary">{summary}</p> */}
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
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
