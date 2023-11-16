// import React from 'react'
import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import debounce from "lodash.debounce";

function SearchField({ setIpAddress, getLocation }) {
  const [ipAddressValue, setIpAddressValue] = useState("");

  const ipv4Pattern =
    /^(?!.*\.\.)(?!.*\.$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // Debounce the getLocation function
  const delayedGetLocation = debounce((ip) => {
    if (ipv4Pattern(ip)) {
      setIpAddress(ip);
      getLocation(ip);
    } else {
      console.log("Invalid IP address. Please enter a valid IPv4 address.");
    }
  }, 500); 

  
  // search value
  const handleInputChange = (e) => {
    setIpAddressValue(e.target.value);
  };


  // search button
  const handButtonClick = () => {
    delayedGetLocation(ipAddressValue);
  };


  // enter key
  const handleEnterSearch = () => {
    delayedGetLocation(ipAddressValue);
  };










  return (
    <form>
      <div className="max-w-xl">
        <div className="flex space-x-4">
          <div className="flex rounded-2xl overflow-hidden w-full">
            <input
              type="text"
              className="w-full rounded-md rounded-r-none p-6"
              placeholder="Search for any IP address or domain"
              onChange={handleInputChange}
              onKeyDown={handleEnterSearch}
            />

            <button
              className="bg-black text-white px-6 text-lg font-semibold py-4 rounded-r-md"
              onClick={handButtonClick}
            >
              <img src={arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchField;
