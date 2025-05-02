import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getRedirectResult } from "firebase/auth";
import { auth } from "./firebase.js";
import { UserContext } from "./contexts/UserContext.jsx";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import LocationDetail from "./components/LocationDetail.jsx";
import TravelGuide from "./components/TravelGuide.jsx";
import TravelGuideDetail from "./components/TravelGuideDetail.jsx";

export default function AppRoutes() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(result.user);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login redirect error:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location/:id" element={<LocationDetail />} />
        <Route path="/guides" element={<TravelGuide />} />
        <Route path="/guide/:id" element={<TravelGuideDetail />} />
      </Routes>
    </>
  );
}
