import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CameraComponent from "./CameraComponent";
import CameraApp from "./CameraApp";

function App() {
  return (
    <div className="App">
      pwa 및 카메라 권한 테스트입니다
      {/* <CameraComponent /> */}
      <CameraApp />
    </div>
  );
}

export default App;
