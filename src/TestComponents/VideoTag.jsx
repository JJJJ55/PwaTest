import React, { useEffect, useRef } from "react";
import videData from "../asset/메인영상.mp4";
import "./VideoCss.css";

const VideoTag = () => {
  const videoRef = useRef(null);

  // 포커스를 제거하는 함수
  const removeFocus = () => {
    if (videoRef.current) {
      videoRef.current.blur(); // 포커스를 제거합니다.
    }
  };

  // 터치 이벤트 처리 함수
  const handleTouchStart = (event) => {
    if (videoRef.current) {
      event.preventDefault(); // 터치 이벤트 방지
    }
  };

  useEffect(() => {
    // 비디오 요소에 포커스 이벤트 리스너 추가
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("focus", removeFocus);
      videoElement.addEventListener("touchstart", handleTouchStart);

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        videoElement.removeEventListener("focus", removeFocus);
        videoElement.removeEventListener("touchstart", handleTouchStart);
      };
    }
  }, []);
  const handleEndVideo = () => {
    alert("제셍 끝");
  };
  return (
    <video
      id="myVideo"
      ref={videoRef}
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
