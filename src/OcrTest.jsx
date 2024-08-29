import { useState } from "react";

const OcrTest = () => {
  const [log, setLog] = useState({ status: "default", progress: 0 });
  const [imagePath, setImagePath] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const tempImagePath = URL.createObjectURL(event.target.files[0]);

    setImagePath(tempImagePath);
  };

  return (
    <div className="App">
      <main className="App-main">
        <h3>이미지 업로드</h3>
        <img src={imagePath} className="upload_img" alt="upload_img" />
        <input type="file" onChange={handleChange} />
        <h3>인식 결과</h3>
        {"분류중 >>"}{" "}
        <div className="text-box">
          <p>result: {result}</p>
        </div>
      </main>
    </div>
  );
};

export default OcrTest;
