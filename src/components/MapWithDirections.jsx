import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

const center = { lat: 13.7563, lng: 100.5018 };
const libraries = ["places"];

export default function GoogleMapSection({ destination }) {
  const [mapInstance, setMapInstance] = useState(null);
  const [directions, setDirections] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const [placeMarkers, setPlaceMarkers] = useState([]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    if (!isLoaded || !destination) {
      setDirections(null);
      return;
    }

    setDirections(null);

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: "กรุงเทพ",
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Directions error:", status);
        }
      }
    );
  }, [isLoaded, destination]);

  useEffect(() => {
    if (!placesService || !directions || !mapInstance) return;

    placeMarkers.forEach((marker) => marker.setMap(null));
    setPlaceMarkers([]);

    const waypoints = directions.routes[0].overview_path;
    const samplePoints = [
      waypoints[Math.floor(waypoints.length / 3)],
      waypoints[Math.floor((waypoints.length * 2) / 3)],
    ];

    const allowedTypes = [
      "tourist_attraction",
      "amusement_park",
      "zoo",
      "aquarium",
      "park",
      "natural_feature",
      "art_gallery",
      "viewpoint",
    ];

    samplePoints.forEach((point) => {
      const request = {
        location: point,
        radius: 10000,
        keyword: "สถานที่ท่องเที่ยว",
      };

      placesService.nearbySearch(request, (results, status) => {
        if (status === "OK" && results.length) {
          results.forEach((place) => {
            const isAllowed = allowedTypes.some((type) =>
              place.types?.includes(type)
            );
            if (isAllowed) {
              const marker = new window.google.maps.Marker({
                map: mapInstance,
                position: place.geometry.location,
                icon: {
                  url: place.icon,
                  scaledSize: new window.google.maps.Size(25, 25),
                },
              });

              const infoWindow = new window.google.maps.InfoWindow({
                content: `
                  <div style="max-width:200px">
                    <strong>${place.name}</strong><br/>
                    ${place.vicinity || ""}<br/>
                    ${place.rating || "-"}
                  </div>
                `,
              });

              marker.addListener("click", () =>
                infoWindow.open(mapInstance, marker)
              );

              setPlaceMarkers((prev) => [...prev, marker]);
            }
          });
        }
      });
    });
  }, [placesService, directions, mapInstance]);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={center}
      zoom={8}
      options={{ scrollwheel: true }}
      onLoad={(map) => {
        setMapInstance(map);
        setPlacesService(new window.google.maps.places.PlacesService(map));
      }}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
}
