// import React from 'react'
import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";






function SearchField({setIpAddress, getLocation}) {
  const [ipAddressValue, setIpAddressValue] = useState("");


  // search value
  const handleInputChange = (e) => {
    e.preventDefault()
    setIpAddressValue(e.target.value);
  }

  // search button
  const handButtonClick = (e) => {
    e.preventDefault()
        setIpAddress(ipAddressValue)
        getLocation(ipAddressValue)
  }

 
  // enter key
  const handleEnterSearch = (e) => {
    setIpAddress(ipAddressValue)
 if(e.key === 'Enter'){
  getLocation(ipAddressValue)
 }
  }


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
