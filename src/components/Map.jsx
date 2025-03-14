import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 13.7563, 
  lng: 100.5018, 
};

export default function Map() {
  return (
      <div className="mt-8 flex justify-center">
        <LoadScript googleMapsApiKey="AIzaSyBHwAddk9t61U-k54ZdlqN96fzGsPtbjc0">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
  );
}

