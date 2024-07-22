// import React, { useEffect, useRef } from "react";
// import * as tmPose from "@teachablemachine/pose"; // Import Teachable Machine Pose library

// const TeachableMachinePose = () => {
//   const URL = "./my_model/";
//   let model, webcam, ctx, labelContainer, maxPredictions;
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const init = async () => {
//       const modelURL = URL + "model.json";
//       const metadataURL = URL + "metadata.json";

//       model = await tmPose.load(modelURL, metadataURL);
//       maxPredictions = model.getTotalClasses();

//       const size = 200;
//       const flip = true;
//       webcam = new tmPose.Webcam(size, size, flip);
//       await webcam.setup();
//       await webcam.play();
//       window.requestAnimationFrame(loop);

//       const canvas = canvasRef.current;
//       canvas.width = size;
//       canvas.height = size;
//       ctx = canvas.getContext("2d");
//       labelContainer = document.getElementById("label-container");
//       for (let i = 0; i < maxPredictions; i++) {
//         labelContainer.appendChild(document.createElement("div"));
//       }
//     };

//     init();

//     return () => {
//       webcam.stop();
//     };
//   }, []);

//   const loop = async () => {
//     webcam.update();
//     await predict();
//     window.requestAnimationFrame(loop);
//   };

//   const predict = async () => {
//     const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
//     const prediction = await model.predict(posenetOutput);

//     for (let i = 0; i < maxPredictions; i++) {
//       const classPrediction =
//         prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//       labelContainer.childNodes[i].innerHTML = classPrediction;
//     }

//     drawPose(pose);
//   };

//   const drawPose = (pose) => {
//     if (webcam.canvas) {
//       ctx.drawImage(webcam.canvas, 0, 0);
//       if (pose) {
//         const minPartConfidence = 0.5;
//         tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
//         tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
//       }
//     }
//   };

//   return (
//     <div>
//       <div>Teachable Machine Pose Model</div>
//       {/* <button type="button" onClick={init}>
//         Start
//       </button> */}
//       <div>
//         <canvas id="canvas" ref={canvasRef}></canvas>
//       </div>
//       <div id="label-container"></div>
//     </div>
//   );
// };

// export default TeachableMachinePose;
