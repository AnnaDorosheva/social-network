import React from "react";
import User from "./User";
import s from "./Users.module.css";
import { UserType } from "../../types/typtes";

export type UsersPropsType = {
  users: Array<UserType>
  follow: (id: number) => void
  unfollow: (id: number) => void
  totalUsersCount: number
  pageSize: number
  activePage: number
  handlePageChange: (e: React.SyntheticEvent, p: number)=> void
  isFollovingToggle: Array<number>
}

const Users : React.FC<UsersPropsType> = ({
  users,
  follow,
  unfollow,
  totalUsersCount,
  pageSize,
  activePage,
  handlePageChange,
  isFollovingToggle,
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
          <li key={p}
            className={activePage === p ? s.selected : s.numberPage}
            onClick={(e : React.SyntheticEvent) => {
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
