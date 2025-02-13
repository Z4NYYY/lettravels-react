import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript, InfoWindow } from "@react-google-maps/api";
import SearchBar from "./SearchBar";
import axios from 'axios';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 13.7563, 
  lng: 100.5018, 
};

export default function Map({ searchData }) {  // รับ searchData จาก SearchBar
  const [location, setLocation] = useState(center);
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // เพิ่ม error state
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const geocodeLocation = async () => {
      setLoading(true);
      setError(null); // เคลียร์ error state ก่อนเริ่มค้นหา

      const query = encodeURIComponent(`${searchData.searchText} ${searchData.selectedProvince}`);

      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        );

        const data = response.data;

        if (data.results.length > 0) {
          const newMarkers = data.results.map((result) => ({
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
            name: result.formatted_address, // เพิ่มชื่อสถานที่ใน marker
          }));

          setLocation(data.results[0].geometry.location);
          setMarkers(newMarkers);
        } else {
          setError("No results found.");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setError("An error occurred while fetching location.");
      } finally {
        setLoading(false);
      }
    };

    if (searchData && searchData.searchText) { // ตรวจสอบว่ามี searchData และ searchText
      geocodeLocation();
    }
  }, [searchData]); // dependency เปลี่ยนเมื่อ searchData เปลี่ยน


  return (
    <div className="bg-gray-200 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Explore the Map</h2>

      {loading && (
        <div className="text-center mt-4">
          <p className="text-blue-500 text-lg font-semibold">Loading...</p>
        </div>
      )}

      {error && (
        <div className="text-center mt-4">
          <p className="text-red-500 text-lg font-semibold">{error}</p>
        </div>
      )}

      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={["places"]} // เพิ่ม libraries places
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker}>
              {infoWindow && marker === infoWindow.anchor && (
                <InfoWindow onCloseClick={() => setInfoWindow(null)}>
                  <div>{marker.name}</div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}