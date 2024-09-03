import React from "react";
import styled from "styled-components";
import ImageMeta from "../TestComponents/ImageMeta";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const ImageTest = () => {
  return (
    <s.Frame>
      <ImageMeta />
    </s.Frame>
  );
};

export default ImageTest;
