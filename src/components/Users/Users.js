import React from "react";
import User from "./User";
import s from "./Users.module.css";

const Users = ({
  users,
  follow,
  unfollow,
  totalUsersCount,
  pageSize,
  activePage,
  handlePageChange,
  isFollovingToggle,
}) => {
  // console.log("ppp", props)
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; pagesCount >= i; i += 1) {
    pages.push(i);
  }

  return (
    <div>
    
      <ul className={s.pagesNumbers}>
        {pages.slice(0, 20).map((p) => (
          <li key={p}
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
            isFollovingToggle={isFollovingToggle}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
      <button type="button">More users</button>
    </div>
  );
};

export default Users;
