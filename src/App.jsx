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
    const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${address}`;



    const res = await axios.get(apiUrl);
    const data =res.data;

    console.log(res.data);
    setIpAddress(data.ip);
    // setLocation( `${data.location.region}, ${data.location.country}, ${data.location.postalcode}`);
    setLocation( `${data.location.region}, ${data.location.country}`);
    setTimeZone(`UTC ${data.location.timezone}`);
    setIsp(`${data.isp}`);

    // for the map
    setCoordinate({ lat: data.location.lat, lng: data.location.lng });
  };

  useEffect(() => {
    getLocation();
  }, []);




  return (
    <div className="flex flex-col h-screen relative">
      <Jumbotron>
        <SearchField
         setIpAddress={setIpAddress}
         getLocation={getLocation}
        />
      </Jumbotron>
      <Stats
        ipAddress={ipAddress}
        location={location}
        timeZone={timeZone}
        isp={isp}
        // coordinates={coordinates}
      />
      <Map coordinates = {coordinates}/>
      <Footer />
    </div>
  );
}

export default App;
