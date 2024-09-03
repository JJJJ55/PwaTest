import React from "react";
import styled from "styled-components";
import Map from "../TestComponents/Map";
import AllMap from "../TestComponents/KoreaMap/AllMap";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const MapTest = () => {
  return (
    <s.Frame>
      {/* <Map /> */}
      <AllMap />
    </s.Frame>
  );
};

export default MapTest;
