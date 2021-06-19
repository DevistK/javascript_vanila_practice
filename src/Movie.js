import React from "react";
import propTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div>
      <h4>{title}</h4>
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
