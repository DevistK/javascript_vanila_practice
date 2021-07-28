import { dbService } from "myBase";
import React from "react";

function Nweet({ nweetObj, isOnwer }) {
  const onDeleteClick = async () => {
    const ok = window.confirm("이 트윗을 삭제 하시겠습니까 ?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    } else {
    }
  };
  return (
    <div>
      <h4>{nweetObj.text}</h4>
      {isOnwer && (
        <>
          <button onClick={onDeleteClick}>Delete Nweet</button>
          <button>Edit Nweet</button>
        </>
      )}
    </div>
  );
}
export default Nweet;
