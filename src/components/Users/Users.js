import React, { Component } from "react";
import User from "./User";
import s from "./Users.module.css";
import * as axios from "axios";
// props.setUsers(
//   [
//     { id: 1, name: "Dima", userAbout: "I am cool!", avatar: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png", userInfo: {country: "Ukraine", town: "Kiev"}, follow: true },
//     { id: 2, name: "Lena", userAbout: "Life is butiful!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3ThUKB-Lw6wp_Z0Kdyq7Bh7lX0xbjAwysQ&usqp=CAU", userInfo: {country: "German", town: "Keln"}, follow: false },
//     { id: 3, name: "Olga",  userAbout: "Hey averywone!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU", userInfo: {country: "Russia", town: "Moskov"}, follow: true },
//     { id: 4, name: "Alex",  userAbout: "Aloha!", avatar: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg", userInfo: {country: "USA", town: "Miami", follow: false }},
//     { id: 5, name: "Bruno", userAbout: "By happy, dont worry!", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg", userInfo: {country: "Cyprus", town: "Limassol"}, follow: true },
//   ]
// )

class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsers(response.data.totalCount)
      });
  }

  handlePageChange = (p) => {
    this.props.setActivePage(p);
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
    )
    .then((response) => this.props.setUsers(response.data.items));
  };

  render() {
    const {
      users,
      handlFollow,
      handlUnfollow,
      totalUsersCount,
      pageSize,
      activePage,
    } = this.props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; pagesCount >= i; i += 1) {
      pages.push(i);
    }

    return (
      <div>
        <ul className={s.pagesNumbers}>
          {pages.slice(1, 20).map((p) => (
            <li
            className={activePage === p ? s.selected : s.numberPage}
              onClick={(e) =>  {this.handlePageChange(p)}}
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
  }
}

export default Users;
