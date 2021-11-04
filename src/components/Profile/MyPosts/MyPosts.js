import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

  const postsArr = props.posts.map(post => <Post {...post}/>)

  const textarea = React.createRef();
  const handlAddPost = () => {
const text = textarea.current.value;
props.addPost(text);
console.log(props.posts)
  }

  return (
    <div>
      <p>My posts</p>
      <div className={s.textarea}>
      <textarea ref={textarea} placeholder="Text your post..."></textarea>
      <button onClick={handlAddPost} type="submit">Add post</button>
      </div>
{postsArr}
    </div>
  )
};

export default MyPosts;
