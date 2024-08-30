import React from "react";
import ReactPlayer from "react-player";
import videData from "../asset/메인영상.mp4";
import styled from "styled-components";
import "./VideoCss.css";
const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .react-player__control {
    pointer-events: none; /* 클릭 비활성화 */
  }
`;

const Video = () => {
  const handleEndVideo = () => {
    // alert("제셍 끝");
  };
  return (
    <PlayerWrapper>
      <ReactPlayer
        url={videData}
        controls={true}
        width="80%"
        height="80%"
        style={{ margin: "0 auto" }}
        onEnded={handleEndVideo}
      />
    </PlayerWrapper>
  );
};

export default Video;
