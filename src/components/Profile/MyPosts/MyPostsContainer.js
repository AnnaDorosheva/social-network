
import { connect } from 'react-redux';
import {changeNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reduser";
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {

  return {
    posts: state.profileReduser.posts,
    postText: state.profileReduser.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
return {
  updateNewPostText: (text) => {
    dispatch(changeNewPostTextActionCreator(text))
  },
  addPost: () => {
    dispatch(addPostActionCreator())
  }
  }
};

const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )(MyPosts)

export default MyPostsContainer;