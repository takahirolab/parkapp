import React from 'react'


const Comments = (props) => {
    console.log(props.comments)
    const parkcomments = props.comments;
    const parkcomment1 = parkcomments.map((parkcomment) =>
        <div class="user-comment">
            <div className="user-comment_inner">
                <img src={parkcomment.userImage} className="userProfile_img" />
            </div>
            <div className="userComment userComment-margin">
                <div className="userNaem">{parkcomment.userName} </div>
                <div className="userComment comment-inner"><p>{parkcomment.comment} </p></div>
            </div>
        </div>

    )

    return(
        <>
            {parkcomment1}
        </>
    )
}

export default Comments


