import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt, FaEnvelope, FaGlobeAsia, FaUser,
  FaMoon, FaSun, FaChevronDown
} from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [language, setLanguage] = useState("TH");
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className={`w-full fixed top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-3">

      <Link to="/" className="text-xl font-bold text-blue-600 whitespace-nowrap hover:opacity-60 transition">
      Let’s Travels
      </Link>

        <div className="flex-1 flex justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 hover:text-blue-500"
              >
                <span>บริการ</span>
                <FaChevronDown className="text-xs" />
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-md rounded text-gray-700 w-48 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">ที่พัก</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">กิจกรรม</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-500">รีวิว</a>
            <a href="#" className="hover:text-blue-500">คู่มือท่องเที่ยว</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4 text-sm whitespace-nowrap">
          <div className="hidden md:flex items-center space-x-1">
            <FaPhoneAlt className="text-red-500" />
            <span>081 853 4183</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <FaEnvelope />
            <span>contact@letstravels.com</span>
          </div>

          <button
            onClick={() => setLanguage(lang => lang === "TH" ? "EN" : "TH")}
            className="flex items-center space-x-1 hover:text-blue-500"
          >
            <FaGlobeAsia />
            <span>{language}</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-yellow-500"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {!user ? (
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
            >
              <FaUser />
              <span>เข้าสู่ระบบ</span>
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">{user.displayName}</span>
              <button
                onClick={handleLogout}
                className="text-red-500 text-sm ml-2 hover:underline"
              >
                ออกจากระบบ
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
