import React from "react";
import User from "./User";
import s from "./Users.module.css";

const Users = (props) => {

const users = props.users.map(user => <User key={user.id} {...user} />)
  return (
<div>
  <div className={s.container}>{users}</div>
<button type="button">More users</button>
</div>
  )
};

export default Users;
