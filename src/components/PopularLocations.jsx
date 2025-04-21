import Slider from "react-slick";
import { Link } from "react-router-dom";
import locations from "../data/locations.json";

export default function PopularLocations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Popular Locations</h2>
      <Slider {...settings} className="px-6">
        {locations.map((loc) => (
          <div key={loc.id} className="px-2">
            <Link
              to={`/location/${loc.id}`}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{loc.name}</h3>
                <p className="text-sm text-gray-600">{loc.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
