import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import CameraComponent from "./TestComponents/CameraComponent";
import CameraApp from "./TestComponents/CameraApp";
import { requestPermission } from "./firebaseCloudMessaging";
import ImageMeta from "./TestComponents/ImageMeta";
import Video from "./TestComponents/Video";
import VideoTag from "./TestComponents/VideoTag";
import VideoTagCustom from "./TestComponents/VideoTagCustom";
import Map from "./TestComponents/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraTest from "./page/CameraTest";
import ImageTest from "./page/ImageTest";
import VideoTest from "./page/VideoTest";
import MapTest from "./page/MapTest";
import Home from "./page/Home";
import Daejeon from "./TestComponents/KoreaMap/SigunMap/Daejeon";
import AllMap from "./TestComponents/KoreaMap/AllMap";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

function App() {
  requestPermission();
  return (
    <s.Frame>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cam" element={<CameraTest />} />
          <Route path="/image" element={<ImageTest />} />
          <Route path="/video" element={<VideoTest />} />
          <Route path="/map" element={<MapTest />}>
            <Route index element={<AllMap />} />
            <Route path="daejeon" element={<Daejeon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </s.Frame>
  );
}

export default App;
