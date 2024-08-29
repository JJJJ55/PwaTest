import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CameraComponent from "./CameraComponent";
import CameraApp from "./CameraApp";
import OcrTest from "./OcrTest";
import TeachableMachinePose from "./TeachableMachinePose";
import Model from "./Model";
import { requestPermission } from "./firebaseCloudMessaging";

function App() {
  requestPermission();
  return (
    <div className="App">
      pwa 푸쉬알림 테스트
      {/* <CameraComponent /> */}
      <CameraApp />
      {/* <OcrTest /> */}
      {/* <TeachableMachinePose /> */}
      {/* <Model /> */}
    </div>
  );
}

export default App;
