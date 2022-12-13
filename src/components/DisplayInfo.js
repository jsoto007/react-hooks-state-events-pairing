import React from "react";
import video from "../data/video"

function DisplayInfo() {
    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
        </div>
        
    )
}

export default DisplayInfo;
