import axios from "axios";

const Axios = axios.create({
  baseURL: "https://h-social-network.herokuapp.com",
});
Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("An unexpected error occured");
  }
  return Promise.reject(error);
});
Axios.interceptors.request.use((request) => {
  const jwt = localStorage.getItem("token");
  if (jwt) request.headers["Authorization"] = jwt;
  return request;
});

export default Axios;
