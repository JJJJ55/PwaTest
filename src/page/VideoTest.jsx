import React from "react";
import styled from "styled-components";
import CameraComponent from "../TestComponents/CameraComponent";
import CameraApp from "../TestComponents/CameraApp";
import Video from "../TestComponents/Video";
import VideoTag from "../TestComponents/VideoTag";
import VideoTagCustom from "../TestComponents/VideoTagCustom";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const VideoTest = () => {
  return (
    <s.Frame>
      {/* 리액트 플레이어 동영상
      <Video />
      일반 비디오 태그 동영상 <br />
      <VideoTag />
      <br /> 일반 비디오 태그 커스텀 동영상 <br /> */}
      <VideoTagCustom />
    </s.Frame>
  );
};

export default VideoTest;
