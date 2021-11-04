import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

  // const posts = [
  //   { id: 1, message: "Hey averywone!", liksCount: 4},
  //   { id: 2, message: "Perfect day today...", liksCount: 4},
  //   { id: 3, message: "O yes!", liksCount: 4}
  // ];

  const postsArr = props.posts.map(post => <Post {...post}/>)
  return (
    <div>
      <p>My posts</p>
      <div className={s.textarea}>
      <textarea placeholder="Text your post..."></textarea>
      <button type="submit">Add post</button>
      </div>
{postsArr}
    </div>
  )
};

export default MyPosts;
