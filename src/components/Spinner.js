import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <article className="loader__spin">
      <Loader type="ThreeDots" color="#fff" height={100} width={100} />
    </article>
  );
}

export default Loading;
