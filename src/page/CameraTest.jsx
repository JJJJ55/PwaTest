import React from "react";
import styled from "styled-components";
import CameraComponent from "../TestComponents/CameraComponent";
import CameraApp from "../TestComponents/CameraApp";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const CameraTest = () => {
  return (
    <s.Frame>
      카메라, 푸쉬알림, 터치 이벤트, 사진 메타정보 테스트 페이지
      <CameraComponent />
      <CameraApp />
    </s.Frame>
  );
};

export default CameraTest;
