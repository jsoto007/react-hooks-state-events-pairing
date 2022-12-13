import React from "react";
import video from "../data/video";


function Comments() {
   
    function handleComments() {

        video.map((item) => {
            <p key={item.id} name={item.user}/>
        })
    }

    return (
        <div>
            <h2>Comments</h2>
            {handleComments}
        </div>
    )
}

export default Comments;