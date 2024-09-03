import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import styled from "styled-components";

const s = {
  Image: styled.img`
    position: absolute;
    top: ${(props) => props.x};
    left: ${(props) => props.y};
    z-index: ${(props) => props.zIndex || 0};
    cursor: pointer;
    &:hover {
      transform: scale(${(props) => props.hoverTrans || 1.2});
      z-index: ${(props) => props.hoverZIndex || 10};
    }
  `,
};

const MapImage = (props) => {
  return <s.Image src={props.Img} {...props} />;
};

export default MapImage;
