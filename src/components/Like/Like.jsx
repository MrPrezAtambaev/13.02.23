import React, { useState } from "react";


const Like = () => {
    // let like = false;
    const [like, setLike] = useState(false);

    return (
        <>
            <h2 onClick={() => setLike(!like)}>
                Like: {like ? '❤️' : '🤍'}
            </h2>
        </>
    )
};

export default Like;