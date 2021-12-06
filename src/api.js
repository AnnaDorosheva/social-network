import axios from "axios";

// const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f5555dd4-b531-41aa-b0e0-c61a94f5a384",
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
  },
  getProfile(id) {
    alert("PLEACE use profileAPI getProfile in api.js")
    return instance
    .get(`profile/` + id).then(response => response.data)
  }
};


export const profileAPI = {
  getProfile(id) {
    return instance
    .get(`profile/` + id).then(response => response.data)
  },
  getStatus(id) {
    return instance.get(`profile/status/` + id).then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status}).then(response => response.data)
  }
};

export const authAPI = {
me() {
  return instance.get(`auth/me`).then(response => response.data)
}
}

// export const getUsers = (activePage = 1, pageSize = 5) => {
//   return instsnce
//     .get(`users?page=${activePage}&count=${pageSize}`)
//     .then((response) => response.data);
// };
