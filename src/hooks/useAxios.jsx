import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxios = () => {
  return instance;
};

export default useAxios;
