import React from "react";
import s from "./User.module.css";
import userAvatar from "../../helpers/img/avatar.jpeg";
import { NavLink } from "react-router-dom";


const User = (props) => {
  // console.log("UUU", props);
  return (
    <div className={s.container}>
      <NavLink to={"/profile/" + props.id}>
        <img
          className={s.avatar}
          src={props.photos.small === null ? userAvatar : props.photos.small}
          alt="avatar"
        />
      </NavLink>
      <h2 className={s.name}>{props.name}</h2>
      {props.followed ? (
        <button
          disabled={props.isFollovingToggle.some((id) => id === props.id)}
          type="button"
          onClick={()=>  props.unfollow(props.id)}
           
            // props.toggleFolloving(true, props.id);
            // usersAPI.unfollowUser(props.id).then((data) => {
            //   if (data.resultCode === 0) {
            //     props.handlUnfollow();
            //   }
            //   props.toggleFolloving(false, props.id);
            // });
      
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.isFollovingToggle.some((id) => id === props.id)}
          type="button"
          onClick={()=>  props.follow(props.id)}
            // props.toggleFolloving(true, props.id);
            // usersAPI
            //   .followUser(props.id)
            //   .then((data) => {
            //     if (data.resultCode === 0) {
            //       props.handlFollow();
            //     }
            //     props.toggleFolloving(false, props.id);
            //   });
          
        >
          Follow
        </button>
      )}
    </div>
  );
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
