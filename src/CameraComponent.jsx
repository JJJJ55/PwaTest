// import React, { useState, useRef } from "react";

// const CameraComponent = () => {
//   const videoRef = useRef(null);
//   const [cameraStarted, setCameraStarted] = useState(false);

//   const startCamera = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           setCameraStarted(true);
//         }
//       })
//       .catch((error) => {
//         console.error("카메라 접근 권한이 거부되었습니다:", error);
//       });
//   };

//   return (
//     <div>
//       <button onClick={startCamera} disabled={cameraStarted}>
//         카메라 시작
//       </button>
//       <div>
//         <video
//           ref={videoRef}
//           autoPlay
//           playsInline
//           width="500px"
//           height="500px"
//         />
//       </div>
//     </div>
//   );
// };

// export default CameraComponent;
import React, { useState, useRef } from "react";

const CameraComponent = () => {
  const videoRef = useRef(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [facingMode, setFacingMode] = useState("user"); // 'user'는 전방 카메라, 'environment'는 후방 카메라

  const startCamera = () => {
    const constraints = {
      video: {
        facingMode: facingMode,
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraStarted(true);
        }
      })
      .catch((error) => {
        console.error("카메라 접근 권한이 거부되었습니다:", error);
      });
  };

  const switchCamera = () => {
    setFacingMode(facingMode === "user" ? "environment" : "user");
    setCameraStarted(false); // 카메라를 다시 시작해야 새로운 facingMode가 적용됩니다.
  };

  return (
    <div>
      <button onClick={startCamera} disabled={cameraStarted}>
        카메라 시작
      </button>
      <button onClick={switchCamera} disabled={!cameraStarted}>
        {facingMode === "user" ? "후방 카메라로 전환" : "전방 카메라로 전환"}
      </button>
      <div>
        <video ref={videoRef} autoPlay playsInline width="100%" height="100%" />
      </div>
    </div>
  );
};

export default CameraComponent;
