import axios from "axios";

// const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "52b64a1f-aeff-4642-8dee-496da26b7afc",
  },
});

export const usersAPI = {
  getUsers(activePage = 1, pageSize = 5) {
    return instance
    .get(`users?page=${activePage}&count=${pageSize}`)
    .then((response) => response.data);
  },
  unfollowUser(id) {
    return instance
    .delete(
      `follow/${id}`
    ).then(response => response.data)
  },
  followUser(id) {
    return instance
    .post(
      `follow/${id}`, null
    ).then(response => response.data)
  }
};

// export const getUsers = (activePage = 1, pageSize = 5) => {
//   return instsnce
//     .get(`users?page=${activePage}&count=${pageSize}`)
//     .then((response) => response.data);
// };
