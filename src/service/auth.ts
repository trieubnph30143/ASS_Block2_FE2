import axios from "../core/api";
export const signIn = (data: any) => {
  try {
    return axios.post(`/auth/signin`, data);
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (data: any) => {
  try {
    return axios.post(`/auth/signup`, data);
  } catch (error) {
    console.log(error);
  }
};
