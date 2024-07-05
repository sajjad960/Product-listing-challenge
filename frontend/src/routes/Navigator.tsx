import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import React from "react";
import useAuthToken from "../hooks/auth/useAuthToken";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const Private: React.FC<PrivateRouteProps> = ({ children }) => {
  const { authToken, isExpired } = useAuthToken();

  if (authToken && !isExpired) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

const Navigator = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Private children={<Home />} />} />
    </Routes>
  );
};

export default Navigator;
