import axios from "axios";

export const getUsers= (activePage = 1, pageSize = 5) => {
  return axios
  .get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${pageSize}`,
    {
      withCredentials: true,
    }
  )
};


