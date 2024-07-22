import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CameraComponent from "./CameraComponent";
import CameraApp from "./CameraApp";
import OcrTest from "./OcrTest";
import TeachableMachinePose from "./TeachableMachinePose";
import Model from "./Model";

function App() {
  return (
    <div className="App">
      pwa 및 카메라 권한 테스트입니다
      {/* <CameraComponent /> */}
      <CameraApp />
      <OcrTest />
      {/* <TeachableMachinePose /> */}
      <Model />
    </div>
  );
}

export default App;
