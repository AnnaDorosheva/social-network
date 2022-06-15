
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
    .get(`users?page=${activePage}&count=${pageSize}`);
  },
  unfollowUser(id: number) {
    return instance
    .delete(
      `follow/${id}`
    );
  },
  followUser(id: number) {
    return instance
    .post(
      `follow/${id}`, null
    );
  },
  getProfile(id: number) {
    alert("PLEACE use profileAPI getProfile in api.js")
    return instance
    .get(`profile/` + id).then(response => response.data);
  }
};
 

export const profileAPI = {
  getProfile(id : number) {
    return instance.get(`profile/` + id);
  },
  getStatus(id : number) {
    return instance.get(`profile/status/` + id);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status});
  }
};

export enum ResultCodeEnum {
Success = 0,
Error = 1
};

type MeResponseType = {
data: { id: number, email: string, login: string}
resultCode: number
messages: Array<string> 
};

type LoginResponseType = {
  data: {userId: number}
  resultCode: ResultCodeEnum
  messages: Array<string> 
};

type LogoutResponseType = {
  data: {}
  resultCode: ResultCodeEnum
  messages: Array<string> 
};

export const authAPI = {
me() {
  return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
},
login(email : string, password : string |  number, rememberMe = false) {
  return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe}).then(res => res.data);
},
logout() {
  return instance.delete<LogoutResponseType>(`auth/login`).then(res => res.data);
}
}

