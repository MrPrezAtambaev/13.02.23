import React, { useState } from "react";

const Like = () => {
  // let like = false;
  const [like, setLike] = useState(false);

  return (
    <>
      <h5 onClick={() => setLike(!like)}>{like ? "❤️" : "🤍"}</h5>
    </>
  );
};

export default Like;
