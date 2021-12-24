import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profileReduser.posts,
    postText: state.profileReduser.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
