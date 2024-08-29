import EXIF from "exif-js";
import React, { useState } from "react";

const ImageMeta = () => {
  const [meta, setMeta] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      extractMetadata(file);
    }
  };

  const extractMetadata = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;

      image.onload = () => {
        EXIF.getData(image, function () {
          const allMetaData = EXIF.getAllTags(this);
          // setMeta({
          //   date: allMetaData.DateTimeOriginal || "정보없음",
          //   size: file.size,
          // });
          console.log(allMetaData);
        });
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {meta && (
        <div>
          <p>날짜 : {meta.date}</p>
          <p>용량 : {meta.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default ImageMeta;

// import React, { useState } from 'react';
// import EXIF from 'exif-js';

// const  ImageMeta = ()=> {
//   const [metadata, setMetadata] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       extractMetadata(file);
//     }
//   };

//   const extractMetadata = (file) => {
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const image = new Image();
//       image.src = event.target.result;

//       image.onload = () => {
//         EXIF.getData(image, function() {
//           const allMetaData = EXIF.getAllTags(this);
//           setMetadata({
//             date: allMetaData.DateTimeOriginal || '정보 없음',
//             size: file.size
//           });
//         });
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       {metadata && (
//         <div>
//           <p>날짜: {metadata.date}</p>
//           <p>용량: {metadata.size} bytes</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ImageMeta;
