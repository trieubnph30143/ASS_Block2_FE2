import axios from "../core/api";
export const getProduct = (data: any) => {
  try {
    return axios.get(`/product?page=${data.page}&size=${data.limit}`);
  } catch (error) {
    console.log(error);
  }
};
export const getOneProduct = (id: any) => {
  try {
    return axios.get(`/product/detail/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const getCategoryProduct = (data: any) => {
  try {
    return axios.get(
      `/product/category/${data.id}?page=${data.page}&size=${data.limit}`
    );
  } catch (error) {
    console.log(error);
  }
};
export const searchProduct = (search: any) => {
  try {
    return axios.get(`/product/searchdebouce?search=${search}`);
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = (data: any) => {
  let token = localStorage.getItem("token");
  try {
    return axios.post("/product", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = (data: any) => {
  try {
    return axios.put(`/product/${data._id}`, data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (id: any) => {
  try {
    return axios.delete(`/product/${id}`);
  } catch (error) {
    console.log(error);
  }
};
