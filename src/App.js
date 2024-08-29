import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CameraComponent from "./TestComponents/CameraComponent";
import CameraApp from "./TestComponents/CameraApp";
import { requestPermission } from "./firebaseCloudMessaging";
import ImageMeta from "./TestComponents/ImageMeta";
import Video from "./TestComponents/Video";

function App() {
  requestPermission();
  return (
    <div className="App">
      카메라, 푸쉬알림, 이미지 메타정보 테스트
      {/* <CameraComponent /> */}
      {/* <CameraApp /> */}
      <ImageMeta />
      <Video />
    </div>
  );
}

export default App;
