import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CameraComponent from "./TestComponents/CameraComponent";
import CameraApp from "./TestComponents/CameraApp";
import { requestPermission } from "./firebaseCloudMessaging";
import ImageMeta from "./TestComponents/ImageMeta";
import Video from "./TestComponents/Video";
import VideoTag from "./TestComponents/VideoTag";

function App() {
  requestPermission();
  return (
    <div className="App">
      카메라, 푸쉬알림, 이미지 메타정보 테스트
      {/* <CameraComponent /> */}
      {/* <CameraApp /> */}
      <ImageMeta />
      리액트 플레이어 동영상
      <Video />
      일반 비디오 태그 동영상 <br />
      <VideoTag />
    </div>
  );
}

export default App;
