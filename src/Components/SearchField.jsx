import { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";

function SearchField({ setIpAddress, getLocation }) {
  const [ipAddressValue, setIpAddressValue] = useState("");

  const ipv4Pattern =
    /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const handleSearch = (e) => {
    e.preventDefault();
    if (ipv4Pattern.test(ipAddressValue)) {
      setIpAddress(ipAddressValue);
      getLocation(ipAddressValue);
      console.log("valid IP");
    } else {
      alert("Please enter a valid IP address");
    }
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEnterSearch();
    }
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
              value={ipAddressValue}
              onChange={(e) => {
                setIpAddressValue(e.target.value);
              }}
              onKeyDown={handleEnterSearch}
            />

            <button
              className="bg-black text-white px-6 text-lg font-semibold py-4 rounded-r-md"
              onClick={handleSearch}
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
