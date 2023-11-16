function Stats({ ipAddress, location, timeZone, isp }) {
  // Check if any of the data is undefined, and if so, return null to avoid rendering
  if (!ipAddress || !location || !timeZone || !isp) {
    return null;
  }

  return (
    <div className="stats-container md:w-[80%] w-[80%] absolute sm:top-[25%] top-[26%] left-[10%] z-50 ">
      <div className="rounded-lg flex md:flex-row flex-col md:gap-5 gap-3 bg-white md:p-10 p-5 shadow-xl">


        <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2  items-center">
          <p className="text-sm text-slate-400 font-semibold">IP ADDRESS</p>
          <p className="md:text-2xl text-black font-bold">{ipAddress}</p>
        </div>

        <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2  items-center">
          <p className="text-sm text-slate-400 font-semibold">LOCATION</p>
          <p className="md:text-2xl text-black font-bold">{location}</p>
        </div>

        <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2  items-center">
          <p className="text-sm text-slate-400 font-semibold">TIMEZONE</p>
          <p className="md:text-2xl text-black font-bold">{timeZone}</p>
        </div>

        <div className="w-full flex flex-col gap-2 items-center">
          <p className="text-sm text-slate-400 font-semibold">ISP</p>
          <p className="md:text-2xl text-black font-bold">{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
