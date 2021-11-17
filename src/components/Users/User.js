import React from 'react';
import s from "./User.module.css";
import userAvatar from "../../img/avatar.jpeg";

const User = (props) => {
  console.log("UUU", props)
  return (
    <div className={s.container}>
      <img className={s.avatar} src={props.photos.small === null ? userAvatar : props.photos.small } alt="avatar" />
      <h2 className={s.name}>{props.name}</h2>
      {/* <p>{props.userInfo.country}{props.userInfo.town}</p> */}
      {/* <p>{props.userAbout}</p> */}
      {props.followed ? 
      <button type="button" onClick={props.handlUnfollow}>Unfollow</button> : <button type="button" onClick={props.handlFollow}>Follow</button>}
    </div>
  )
};
// class User extends Component {

//   render() {
//     return (
//           <div className={s.container}>
//       <img className={s.avatar} src={this.props.photos.small === null ? userAvatar : this.props.photos.small } alt="avatar" />
//       <h2>{this.props.name}</h2>
//       {/* <p>{props.userInfo.country}{props.userInfo.town}</p> */}
//       {/* <p>{props.userAbout}</p> */}
//       {this.props.followed ? 
//       <button type="button" onClick={this.props.handlUnfollow}>Unfollow</button> : <button type="button" onClick={this.props.handFollow}>Follow</button>}
//     </div>
//     )
//   }
// }

export default User;
