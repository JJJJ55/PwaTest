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

  .overlay {
    position: absolute;
    bottom: 20px;
    left: 25%;
    width: 50%;
    height: 2%;
    background: transparent; /* 오버레이를 투명하게 설정 */
    z-index: 1; /* 비디오 위에 오버레이를 표시 */
  }
`;

const Video = () => (
  <PlayerWrapper>
    <ReactPlayer
      url={videData}
      controls={true}
      width="50%"
      height="50%"
      style={{ margin: "0 auto" }}
    />
    <div className="overlay" />
  </PlayerWrapper>
);

export default Video;
