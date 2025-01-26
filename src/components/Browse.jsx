import React from "react";
import Header from "./Header";
import MainVideoTrailer from "./MainVideoTrailer";
import MainVideoTitle from "./MainVideoTitle";

const Browse = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      {/* Now here the video container will come */}
      <MainVideoTitle />
      <MainVideoTrailer />
    </div>
  );
};

export default Browse;
