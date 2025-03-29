import React from "react";
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import SearchBar from './components/SearchBar.jsx';
import Map from './components/Map.jsx';
import PopularLocations from './components/PopularLocations.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Map />
      <PopularLocations />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
