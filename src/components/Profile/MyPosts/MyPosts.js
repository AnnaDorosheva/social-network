import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const postsArr = props.posts.map((post) => <Post key={post.id} {...post} />);

  const handlAddPost = (formData) => {
    props.addPost(formData.myNewPostText);
  };

  return (
    <div>
      <AddMyNewPostText onSubmit={handlAddPost} />
      {postsArr}
    </div>
  );
};

const MyPostText = (props) => {
  return (
    <form className={s.textarea} onSubmit={props.handleSubmit}>
      <Field
        placeholder="Text your post..."
        name="myNewPostText"
        component="textarea"
      />

      <button type="submit">Add post</button>
    </form>
  );
};

const AddMyNewPostText = reduxForm({ form: "addMyPostText" })(MyPostText);

export default MyPosts;
