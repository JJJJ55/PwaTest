import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ImageMeta from "../TestComponents/ImageMeta";
import sound from "../asset/accidentSound.mp3";
const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const ImageTest = () => {
  const audioRef = useRef(null);
  const [isFlag, setIsFlag] = useState(false);
  useEffect(() => {
    if (isFlag && audioRef.current) {
      audioRef.current.play(); // Play the audio when status is 200
      audioRef.current.loop = true;
    } else if (!isFlag) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isFlag]);
  return (
    <s.Frame>
      <ImageMeta />
      <audio ref={audioRef} src={sound} />
      <button
        onClick={() => {
          setIsFlag(!isFlag);
        }}
      >
        버튼
      </button>
    </s.Frame>
  );
};

export default ImageTest;
