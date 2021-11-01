import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea placeholder="Text your post..."></textarea>
      <button type="submit">Add post</button>
      <Post message="Hello averywone!"/>
      <Post message="Hey...."/>
      <Post message="How are you?"/>
    </div>
  )
};

export default MyPosts;
