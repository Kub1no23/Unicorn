import React, { useState } from 'react'

function Comment(props) {

    const [comment, setComment] = useState(props.initialText);

    const handleComment = (event) => {
        setComment(event.target.value);
    }

    return (
        <>
            <div>
                <textarea name="comment" value={comment} onChange={handleComment}></textarea>
            </div>
            <p>Comment: {comment}</p>
        </>
    );
}

export default Comment