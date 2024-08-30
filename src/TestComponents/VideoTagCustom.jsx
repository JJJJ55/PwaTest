import React, { useRef, useState } from "react";
import videData from "../asset/메인영상.mp4";
import "./VideoCss.css";

const VideoTagCustom = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEndVideo = () => {
    alert("재생 끝");
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        id="myVideo"
        src={videData}
        width="50%"
        muted
        onEnded={handleEndVideo}
        controls={false} // 기본 컨트롤 숨기기
      />
      <div className="custom-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        {/* 추가적인 커스텀 컨트롤을 여기에서 구현할 수 있습니다. */}
      </div>
    </div>
  );
};

export default VideoTagCustom;
