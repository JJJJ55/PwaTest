import React, { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tmPose from "@teachablemachine/pose";

const TeachableMachinePose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const labelContainerRef = useRef(null);
  let model, webcam, ctx, labelContainer, maxPredictions;

  // Define init function
  const init = async () => {
    const modelURL = "/public/my_model/model.json";
    const metadataURL = "/public/my_model/metadata.json";

    // Load the model and metadata
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    const size = 200;
    const flip = true;
    webcam = new tmPose.Webcam(size, size, flip);
    await webcam.setup();
    await webcam.play();

    // Initialize canvas and label container
    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = labelContainerRef.current;
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }

    // Start predicting loop
    window.requestAnimationFrame(loop);
  };

  useEffect(() => {
    // Call init function when component mounts
    init();

    return () => {
      // Cleanup webcam and model resources when component unmounts
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  const loop = async () => {
    if (webcam) {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    if (model && webcam) {
      const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
      const prediction = await model.predict(posenetOutput);

      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }

      drawPose();
    }
  };

  const drawPose = () => {
    if (webcam && webcam.canvas) {
      const canvas = canvasRef.current;
      ctx.drawImage(webcam.canvas, 0, 0);
      // Uncomment below to draw keypoints and skeleton
      // if (pose) {
      //   const minPartConfidence = 0.5;
      //   tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      //   tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      // }
    }
  };

  return (
    <>
      <div>
        <div>Teachable Machine Pose Model</div>
        <button type="button" onClick={init}>
          Start
        </button>
        <div>
          <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
        <div ref={labelContainerRef} id="label-container"></div>
      </div>
    </>
  );
};

export default TeachableMachinePose;
