import React, { useState } from "react";
import { ImageModel } from "react-teachable-machine";
export default function Model() {
  const [isDay, setIsDay] = useState(true);
  const [isNear, setIsNear] = useState(false);
  return (
    <div
      style={{
        backgroundColor: isDay ? "white" : "black",
        color: isDay ? "black" : "white",
        fontSize: isNear ? "1rem" : "4rem",
      }}
    >
      <h1>Hello React teachable machine</h1>
      <ImageModel
        preview={true}
        size={200}
        info={false}
        onPredict={(prediction) => {
          setIsDay(prediction[0].probability > 0.5);
        }}
        model_url="https://teachablemachine.withgoogle.com/models/qNic7uOOY/"
      ></ImageModel>
    </div>
  );
}
