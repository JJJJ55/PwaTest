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
import Seoul from "./TestComponents/KoreaMap/SigunMap/Seoul";
import Incheon from "./TestComponents/KoreaMap/SigunMap/Incheon";
import Sejong from "./TestComponents/KoreaMap/SigunMap/Sejong";
import Gwangju from "./TestComponents/KoreaMap/SigunMap/Gwangju";
import Daegu from "./TestComponents/KoreaMap/SigunMap/Daegu";
import Ulsan from "./TestComponents/KoreaMap/SigunMap/Ulsan";
import Busan from "./TestComponents/KoreaMap/SigunMap/Busan";
import Jeju from "./TestComponents/KoreaMap/SigunMap/Jeju";
import Gyeonggi from "./TestComponents/KoreaMap/SigunMap/Gyeonggi";
import Chungnam from "./TestComponents/KoreaMap/SigunMap/Chungnam";
import Chungbuk from "./TestComponents/KoreaMap/SigunMap/Chungbuk";
import Jeonbuk from "./TestComponents/KoreaMap/SigunMap/JeonBuk";
import Jeonnam from "./TestComponents/KoreaMap/SigunMap/Jeonnam";
import Gangwon from "./TestComponents/KoreaMap/SigunMap/Gangwon";
import Gyeongbuk from "./TestComponents/KoreaMap/SigunMap/Gyeongbuk";
import Gyeongnam from "./TestComponents/KoreaMap/SigunMap/Gyeongnam";
import MoneyPage from "./page/MoneyPage";

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
          <Route path="/PwaTest" element={<Home />} />
          <Route path="/money" element={<MoneyPage />} />
          <Route path="/cam" element={<CameraTest />} />
          <Route path="/image" element={<ImageTest />} />
          <Route path="/video" element={<VideoTest />} />
          <Route path="/map" element={<MapTest />}>
            <Route index element={<AllMap />} />
            <Route path="seoul" element={<Seoul />} />
            <Route path="incheon" element={<Incheon />} />
            <Route path="sejong" element={<Sejong />} />
            <Route path="daejeon" element={<Daejeon />} />
            <Route path="gwangju" element={<Gwangju />} />
            <Route path="daegu" element={<Daegu />} />
            <Route path="ulsan" element={<Ulsan />} />
            <Route path="busan" element={<Busan />} />
            <Route path="gyeonggi" element={<Gyeonggi />} />
            <Route path="chungnam" element={<Chungnam />} />
            <Route path="chungbuk" element={<Chungbuk />} />
            <Route path="jeonbuk" element={<Jeonbuk />} />
            <Route path="jeonnam" element={<Jeonnam />} />
            <Route path="gangwon" element={<Gangwon />} />
            <Route path="gyeongbuk" element={<Gyeongbuk />} />
            <Route path="gyeongnam" element={<Gyeongnam />} />
            <Route path="jeju" element={<Jeju />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </s.Frame>
  );
}

export default App;
