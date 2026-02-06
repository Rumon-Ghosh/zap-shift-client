import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location?.pathname} />;
  }
};

export default PrivateRoute;
