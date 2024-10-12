import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { messaging, onMessage } from "./firebase-config";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseConfig } from "../firebaseCloudMessaging";
import { initializeApp } from "firebase/app";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
  Title: styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  `,
  BtnArea: styled.div`
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,
  Btn: styled.button`
    width: 100px;
  `,
};

const Home = () => {
  const navigate = useNavigate();

  const handleMovePage = (path) => {
    navigate(path);
  };

  return (
    <s.Frame>
      <s.Title>PWA, 프로젝트 테스트 페이지</s.Title>
      <s.BtnArea>
        <s.Btn onClick={() => handleMovePage("/cam")}>카메라</s.Btn>
        <s.Btn onClick={() => handleMovePage("/image")}>이미지</s.Btn>
        <s.Btn onClick={() => handleMovePage("/video")}>비디오</s.Btn>
        <s.Btn onClick={() => handleMovePage("/map")}>지도</s.Btn>
        <s.Btn onClick={() => handleMovePage("/money")}>결제</s.Btn>
      </s.BtnArea>
      {/* 알림 아이콘 */}
      <span style={{ position: "relative" }}>
        <i className="notification-icon">🔔</i>
        {/* {notificationCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "red",
              borderRadius: "50%",
              color: "white",
              padding: "2px 5px",
              fontSize: "12px",
            }}
          >
            {notificationCount}
          </span>
        )} */}
      </span>
    </s.Frame>
  );
};

export default Home;
