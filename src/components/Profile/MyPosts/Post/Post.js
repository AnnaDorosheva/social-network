import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <img className={s.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIZ65bUZfqwc204EF5GN3tpbfY5zQ2WiB1A&usqp=CAU" alt="avatar" width="40"/>
    <p className={s.post}>{props.message}</p>
   <span>Like</span>
    </div>
  )
};

export default Post;
