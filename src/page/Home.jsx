import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <s.Title>PWA 및 특화 프로젝트 테스트 페이지</s.Title>
      <s.BtnArea>
        <s.Btn onClick={() => handleMovePage("/cam")}>카메라</s.Btn>
        <s.Btn onClick={() => handleMovePage("/image")}>이미지</s.Btn>
        <s.Btn onClick={() => handleMovePage("/video")}>비디오</s.Btn>
        <s.Btn onClick={() => handleMovePage("/map")}>지도</s.Btn>
      </s.BtnArea>
    </s.Frame>
  );
};

export default Home;
