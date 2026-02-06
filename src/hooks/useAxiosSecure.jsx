import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth"; 

const axiosSecure = axios.create({
  baseURL: "https://your-api-url.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },  
});

const useAxiosSecure = () => {
  const { LogOutUser, user } = useAuth();
  const navigate = useNavigate();

  // Request Interceptor: Add token to every request
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = user?.accessToken;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response Interceptor: Handle 401 and 403 errors
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response ? error.response.status : null;

      if (status === 401 || status === 403) {
        // Log out the user and redirect to login
        await LogOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;