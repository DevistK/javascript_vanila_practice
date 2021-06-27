import React, { useEffect } from "react";
function Detail({ location, history }) {
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });
  return (
    <span>{location.state ? <span>{location.state.title}</span> : null}</span>
  );
}

export default Detail;
