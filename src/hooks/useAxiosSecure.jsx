import React, { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosSecure = () => {
  const { LogOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Request Interceptor: Add token to every request
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const token = await auth.currentUser?.getIdToken();
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
    const responseInterceptor = axiosSecure.interceptors.response.use(
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

    // Cleanup: Eject interceptors when the component unmounts
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [LogOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;