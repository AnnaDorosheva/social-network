import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../helpers/validators/validators";
import Textarea from "../../../helpers/Textarea/Textarea";

const maxLength = maxLengthCreator(20);

const MyPosts = (props) => {
  const postsArr = props.posts.map((post) => <Post key={post.id} {...post} />);

  const handlAddPost = (formData) => {
    props.addPost(formData.myNewPostText);
    formData.myNewPostText = "";
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
      validate={[maxLength, required]}
        placeholder="Text your post..."
        name="myNewPostText"
        component={Textarea}
      />

      <button type="submit">Add post</button>
    </form>
  );
};

const AddMyNewPostText = reduxForm({ form: "addMyPostText" })(MyPostText);

export default MyPosts;
