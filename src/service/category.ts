import axios from "../core/api";
export const getCategory = () => {
  try {
    return axios.get("/category");
  } catch (error) {
    console.log(error);
  }
};
