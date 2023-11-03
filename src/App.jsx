import Jumbotron from "./Components/Jumbotron";
import SearchField from "./Components/SearchField";
import Stats from "./Components/stats";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

import axios from "axios";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");
  const [coordinates, setCoordinate] = useState({});

  const getLocation = async (address = "") => {
    const axiosConfig = {
      timeout: 5000, // Set a timeout when result is taking too long to complete
    };

    // const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${address}`;
    const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${address}`;
    const res = await axios.get(apiUrl, axiosConfig);
    const data = res.data;

    try {
      console.log(res.data);

      setIpAddress(data.ip);
    // setLocation( `${data.location.region}, ${data.location.country}, ${data.location.postalcode}`);
      setLocation(`${data.city}, ${data.country_name}, ${data.zipcode}`);
      setTimeZone(`UTC ${data.time_zone.offset}`);
      setIsp(`${data.isp}`);

      // for the map
      setCoordinate({
        lat: data.latitude,
        lng: data.longitude,
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        // Request was canceled, handle as needed
      } else {
        // Handle other errors, e.g., display an error message
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
      <Map coordinates={coordinates} />
      <Footer />
    </div>
  );
}

export default App;
