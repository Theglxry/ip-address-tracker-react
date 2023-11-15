function Stats({ ipAddress, location, timeZone, isp }) {
  // Check if any of the data is undefined, and if so, return null to avoid rendering
  if (!ipAddress || !location || !timeZone || !isp) {
    return null;
  }

  return (
    <div
      className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] top-[16rem] md:mt-4 w-4/5 rounded-lg absolute  md:top-60 left-[5rem] md:left-40 bg-white z-50 flex flex-col sm:flex-row container gap-4 md:gap-10 p-4 md:p-8 "
    >
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
  );
}

export default Stats;
