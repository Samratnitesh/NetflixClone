import React from "react";

const MainVideoTrailer = () => {
  return (
    <div className="relative aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/7wEQ59knObo?si=x8j4rr3ZM9Ey5ck2&controls=0&autoplay=1&mute=1&loop=1&playlist=7wEQ59knObo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MainVideoTrailer;
