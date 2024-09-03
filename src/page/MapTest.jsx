import React from "react";
import styled from "styled-components";
import Map from "../TestComponents/Map";
import AllMap from "../TestComponents/KoreaMap/AllMap";
import { Outlet } from "react-router-dom";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
  MapArea: styled.div`
    width: fit-content;
    border: 3px solid blue;
    margin: 0 auto;
  `,
};

const MapTest = () => {
  return (
    <s.Frame>
      {/* <Map /> */}
      <s.MapArea>
        <Outlet />
      </s.MapArea>
    </s.Frame>
  );
};

export default MapTest;
