import React, { useState } from "react";
import video from "../data/video"

function LikeDislikeBtn() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    function handleLikes(event) {
       setLikes((likes) => likes + 1)
    }

    function handleDislikes(event) {
        setDislikes((dislikes) => dislikes + 1)
    }

    return (
        <div>
        <button onClick={handleLikes}>{likes} 👍</button><button onClick={handleDislikes}>{dislikes} 👎</button>
        </div>
    )
}

export default LikeDislikeBtn;