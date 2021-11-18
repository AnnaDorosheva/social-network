import React from "react";
import User from "./User";
import s from "./Users.module.css";
import LoaderSpinner from "../../helpers/LoaderSpinner/LoaderSpinner";

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

// class Users extends Component {
// componentDidMount() {
//   axios
//     .get(
//       `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`
//     )
//     .then((response) => {
//       this.props.setUsers(response.data.items)
//       this.props.setTotalUsers(response.data.totalCount)
//     });
// }

// handlePageChange = (e, p) => {
//   this.props.setActivePage(p);
//   console.log(e.target);
//   e.target.style="font-weight: 700;"
//   axios
//   .get(
//     `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
//   )
//   .then((response) => this.props.setUsers(response.data.items));
// };

//   render() {
//     const {
// users,
// handlFollow,
// handlUnfollow,
// totalUsersCount,
// pageSize,
// activePage,
//     } = this.props;

//     const pagesCount = Math.ceil(totalUsersCount / pageSize);

//     const pages = [];
//     for (let i = 1; pagesCount >= i; i += 1) {
//       pages.push(i);
//     }

//     return (
//       <div>
//         <ul className={s.pagesNumbers}>
//           {pages.slice(0, 20).map((p) => (
//             <li
//             className={activePage === p ? s.selected : s.numberPage}
//               onClick={(e) => {this.handlePageChange(e, p)}}
//             >
//               {p}
//             </li>
//           ))}
//         </ul>
//         <div className={s.container}>
//           {users.map((user) => (
//             <User
//               key={user.id}
//               {...user}
//               handlFollow={() => handlFollow(user.id)}
//               handlUnfollow={() => handlUnfollow(user.id)}
//             />
//           ))}
//         </div>
//         <button type="button">More users</button>
//       </div>
//     );
//   }
// }

// export default Users;
