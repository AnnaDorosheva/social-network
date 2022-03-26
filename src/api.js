import axios from "axios";

// const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2c1b61ad-e562-4113-91d8-e5e57804f8e8",
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
    ).then(response => response.data);
  },
  followUser(id) {
    return instance
    .post(
      `follow/${id}`, null
    ).then(response => response.data);
  },
  getProfile(id) {
    alert("PLEACE use profileAPI getProfile in api.js")
    return instance
    .get(`profile/` + id).then(response => response.data);
  }
};
 

export const profileAPI = {
  getProfile(id) {
    return instance
    .get(`profile/` + id).then(response => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/` + id).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status}).then(response => response.data);
  }
};

export const authAPI = {
me() {
  return instance.get(`auth/me`).then(response => response.data);
},
login(email, password, rememberMe = false) {
  return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
},
logout() {
  return instance.delete(`auth/login`).then(response => response.data);
}
}

