import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import Map from "./components/Map";
import PopularLocations from './components/PopularLocations';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Map />
      <PopularLocations />
      <Footer />
    </div>
  );
}
