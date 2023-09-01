import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://mernappbackend-dxao.onrender.com",
  withCredentials: true,
});

export default newRequest;
