import React from "react";

const MainVideoTitle = () => {
  return (
    <div className="absolute z-10 mx-28 mt-80">
      <h1 className="font-bold text-5xl mb-4 text-white">Justice League</h1>
      <p className="text-xl w-1/2 text-white">
        Steppenwolf and his Parademons return after eons to capture Earth.
        However, Batman seeks the help of Wonder Woman to recruit and assemble
        Flash, Cyborg and Aquaman to fight the powerful new enemy.
      </p>
      <div className="flex gap-1 py-4">
        <button className="px-6 py-3 border border-black/40 rounded-lg bg-white font-bold">▶️ Play</button>
        <button className="px-6 py-3 border border-black/40 rounded-lg bg-gray-500 text-white"> ℹ️ More Info</button>
      </div>
    </div>
  );
};

export default MainVideoTitle;
