import React, { useEffect } from "react";
function Detail({ location, history }) {
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });
  return location.state ? (
    <div className="container_detail">
      <figure className="detail__poster">
        <img src={location.state.poster} alt={location.state.title} />
      </figure>
      <p className="detail__title">{location.state.title}</p>
      <p className="detail__years">{location.state.year}</p>
      <p className="detail__rating">{location.state.rating}</p>
      {location.state.genres.map((item) => (
        <span className="detail__genre">{item}</span>
      ))}
      <article className="detail__content">{location.state.summary}</article>
    </div>
  ) : null;
}

export default Detail;
