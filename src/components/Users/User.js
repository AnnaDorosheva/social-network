import React from "react";
import s from "./User.module.css";
import userAvatar from "../../helpers/img/avatar.jpeg";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
        <button type="button"   onClick={() => {
          axios
            .delete(
              `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
              { withCredentials: true,
              headers: {
                "API-KEY": "52b64a1f-aeff-4642-8dee-496da26b7afc"
              } }
            )
            .then((response) => {
              console.log(response);
              if (response.data.resultCode === 0) {
                props.handlUnfollow();
              }
            });
        }}>
          Unfollow
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {},
                { withCredentials: true,
                headers: {
                  "API-KEY": "52b64a1f-aeff-4642-8dee-496da26b7afc"
                } }
              )
              .then((response) => {
                console.log(response);
                if (response.data.resultCode === 0) {
                  props.handlFollow();
                }
              });
          }}
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
