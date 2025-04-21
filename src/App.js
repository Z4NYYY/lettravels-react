import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import SearchBar from './components/SearchBar.jsx';
import GoogleMapSection from './components/GoogleMapSection.jsx';
import PopularLocations from './components/PopularLocations.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import Login from './components/Login.jsx';
import UserProvider from './contexts/UserContext.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationDetail from './components/LocationDetail.jsx';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <HeroSection />
              <SearchBar />
              <GoogleMapSection />
              <PopularLocations />
              <Footer />
              <Chatbot />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/location/:id" element={<LocationDetail />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
