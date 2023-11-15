// App.js
import Jumbotron from "./Components/Jumbotron";
import SearchField from "./Components/SearchField";
import Stats from "./Components/stats";
import MapComponent from "./Components/Map";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");
  const [coordinates, setCoordinates] = useState({
    latitude: 6.4547,
    longitude: 3.38876,
  });

  const getLocation = async (address = "") => {
    const axiosConfig = {
      timeout: 5000,
    };

    const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${address}`;
    const res = await axios.get(apiUrl, axiosConfig);
    const data = res.data;

    // const { latitude, longitude } = data;
    const latitude = parseFloat(data.latitude)
    const longitude = parseFloat(data.longitude)


console.log(latitude, longitude);

    try {
      console.log(res.data);
      setIpAddress(data.ip);
      setLocation(`${data.city}, ${data.country_name}, ${data.zipcode}`);
      setTimeZone(`UTC ${data.time_zone.offset}`);
      setIsp(`${data.isp}`);

      setCoordinates({
        latitude,
        longitude,
      });


    } catch (error) {
      if (axios.isCancel(error)) {
        // Request was canceled, handle as needed
      } else {
        // Handle other errors,
        console.error("An error occurred:", error);
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <Jumbotron>
        <SearchField setIpAddress={setIpAddress} getLocation={getLocation} />
      </Jumbotron>
      <Stats
        ipAddress={ipAddress}
        location={location}
        timeZone={timeZone}
        isp={isp}
      />

      <MapComponent coordinates={coordinates} location={location} />
    </div>
  );
}

export default App;
