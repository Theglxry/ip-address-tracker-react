import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function MapComponent({ coordinates, location }) {
  console.log("Coordinates prop in MapComponent: ", coordinates);

  const latitude = parseFloat(coordinates.latitude);
  const longitude = parseFloat(coordinates.longitude);

  const markerIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

   const mapKey = `${latitude}-${longitude}`

  return (
    <MapContainer
        key={mapKey}
      center={[latitude, longitude]}
      zoom={18}
      scrollWheelZoom={true}
      style={{ height: "65vh", width: "100%" }}
      className="z-10"
    >
      <TileLayer
        attribution="Maps"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]} icon={markerIcon}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
