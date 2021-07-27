import React from "react";

function Nweet({ nweetObj, isOnwer }) {
  return (
    <div>
      <h4>{nweetObj.text}</h4>
      {isOnwer && (
        <>
          <button>Delete Nweet</button>
          <button>Edit Nweet</button>
        </>
      )}
    </div>
  );
}
export default Nweet;
