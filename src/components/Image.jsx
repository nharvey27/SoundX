import React, { useState } from "react";

const Image = ({ track, url, playTrack }) => {
  const [loaded, handleLoad] = useState(false);

  const miniUrl = url.replace(/large/, "mini");
  const largeUrl = url.replace(/large/, "t300x300");

  const imageFactory = (url) => (
    <img
      alt=""
      onLoad={() => handleLoad(true)}
      onClick={() => playTrack(track)}
      className="rounded-md m-auto"
      src={url}
    />
  );
  return loaded ? imageFactory(largeUrl) : imageFactory(miniUrl);
};

export default Image;
