import React from "react";
import { useSearchParams } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import SearchBar from "./SearchBar.jsx";
import GoogleMapSection from "./MapWithDirections.jsx";
import PopularLocations from "./PopularLocations.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";
import Navbar from "./Navbar.jsx";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("dest");

  const handleSearch = (dest) => {
    setSearchParams({ dest });
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <GoogleMapSection key={destination} destination={destination} />
      <PopularLocations />
      <Footer />
      <Chatbot />
    </>
  );
}
