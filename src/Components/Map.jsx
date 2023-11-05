import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


function MapComponent({ coordinates, location }) {
  console.log("Coordinates prop in MapComponent: ", coordinates);

  const latitude = parseFloat(coordinates.latitude); // Convert latitude to a number
  const longitude = parseFloat(coordinates.longitude); // Convert longitude to a number


  const markerIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });
  

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={18}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="Maps"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]} 
      icon={markerIcon}
      >
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;

