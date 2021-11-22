import React from "react";
import User from "./User";
import s from "./Users.module.css";

const Users = ({
  users,
  handlFollow,
  handlUnfollow,
  totalUsersCount,
  pageSize,
  activePage,
  handlePageChange,
  isloading
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; pagesCount >= i; i += 1) {
    pages.push(i);
  }

  return (
    <div>
    
      <ul className={s.pagesNumbers}>
        {pages.slice(0, 20).map((p) => (
          <li
            className={activePage === p ? s.selected : s.numberPage}
            onClick={(e) => {
              handlePageChange(e, p);
            }}
          >
            {p}
          </li>
        ))}
      </ul>
      <div className={s.container}>
        {users.map((user) => (
          <User
            key={user.id}
            {...user}
            handlFollow={() => handlFollow(user.id)}
            handlUnfollow={() => handlUnfollow(user.id)}
          />
        ))}
      </div>
      <button type="button">More users</button>
    </div>
  );
};

export default Users;
