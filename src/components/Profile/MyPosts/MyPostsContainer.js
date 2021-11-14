
import { connect } from 'react-redux';

import {changeNewPostTextActionCreator, addPostActionCreator } from "../../redux/profile-reduser";
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//   console.log("CONTINER", props)
//   const state = props.store.getState();

//   const handlAddPost = () => {
// const action = addPostActionCreator();
// props.store.dispatch( action );
//   }
//  const handleChange = (text) => {
// const action = changeNewPostTextActionCreator(text)
// props.store.dispatch( action );
//   }

//   return (
// <MyPosts updateNewPostText={handleChange} addPost={handlAddPost} postText={state.profileReduser.newPostText} posts={state.profileReduser.posts}/>
//   )
// };
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