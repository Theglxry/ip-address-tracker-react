// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";


 
// tutorial way first
// import "leaflet/dist/leaflet.css";
// import L, { marker } from "leaflet";

// import landMarker from "../assets/images/icon-location.svg";
// import { MapContainer, TileLayer } from "react-leaflet";

// const Map = ({ coordinates }) => {
//   const marker = new L.icon({ iconUrl: landMarker });
//   let state = {
//     keyMap: Math.random(),
//   };

//   return (
//     <MapContainer
//       key={state.keyMap}
//       center={[coordinates.latitude, coordinates.longitude]}
//       zoom={18}
//       className="w-full h-3/5 z-0"
//     >
//       <TileLayer
//         attribution="Google Maps"
//         url="https//google.cn/map/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
//       >
//         <marker
//           position={[coordinates.lat, coordinates.lng]}
//           icon={marker}
//         ></marker>
//       </TileLayer>
//     </MapContainer>
//   );
// };

// export default Map;


 
// import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ coordinates }) => {
  return (
 <div>you</div>
  );
};

export default Map;
