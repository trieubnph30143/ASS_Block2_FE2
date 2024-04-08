import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/.netlify/functions/api",
});
instance.defaults.withCredentials = true;

instance.interceptors.response.use((response) => {
  const { data } = response;
  return data;
});

export default instance;
