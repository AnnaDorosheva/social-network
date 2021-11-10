import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {changeNewPostTextActionCreator, addPostActionCreator } from "../../redux/profile-reduser";

const MyPosts = (props) => {

  const postsArr = props.posts.map(post => <Post {...post}/>)

  const textarea = React.createRef();

  const handlAddPost = () => {
const action = addPostActionCreator();
props.dispatch( action );
  }
 const handleChange = () => {
 let text = textarea.current.value;
const action = changeNewPostTextActionCreator( text )
props.dispatch( action );
  }

  return (
    <div>
      <p>My posts</p>
      <div className={s.textarea}>
      <textarea ref={textarea} placeholder="Text your post..." value={props.postText} onChange={handleChange} />
      <button onClick={handlAddPost} type="submit">Add post</button>
      </div>
{postsArr}
    </div>
  )
};

export default MyPosts;
