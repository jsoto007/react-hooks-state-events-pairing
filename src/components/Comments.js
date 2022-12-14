import React from "react";


function Comments({ video }) {

    const commentsArr = video.comments.map((item) => {
        return(
        <div key={item.id}>
            <ul><b>{item.user}</b></ul>
            <ul>{item.comment}</ul>
        </div>
        )
    })

    return (
        <div>
            <h2>{commentsArr.lenght}Comments</h2>
            <p>
                {commentsArr}
            </p>
        </div>
    )
}

export default Comments;