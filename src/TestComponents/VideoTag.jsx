import React from "react";
import videData from "../asset/메인영상.mp4";
import "./VideoCss.css";

const VideoTag = () => {
  const handleEndVideo = () => {
    alert("제셍 끝");
  };
  return (
    <video
      id="myVideo"
      // className="player"
      src={videData}
      width={"50%"}
      controls
      muted
      onEnded={handleEndVideo}
    />
  );
};

export default VideoTag;
