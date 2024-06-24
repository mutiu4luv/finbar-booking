// import React from "react";
// import "./VideoBackground.css";

// const VideoBackground = ({ videoSrc }) => {
//   const videoStyles = {
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     zIndex: -1,
//   };

//   return (
//     <div>
//       <div className="video-heading">MY PERFORMANCE</div>
//       <div
//         style={{
//           overflow: "hidden",
//           width: "auto",
//           height: "100%",
//         }}
//       >
//         <video style={videoStyles} autoPlay loop muted>
//           <source src={videoSrc} type="video/mp4" />
//           vido v{" "}
//         </video>
//       </div>
//     </div>
//   );
// };

// export default VideoBackground;

import React, { forwardRef } from "react";

const VideoBackground = forwardRef(({ videoSrc, muted = true }, ref) => {
  const videoStyles = {
    // position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  return (
    <div
      style={{
        // position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "80vh",
      }}
    >
      <video style={videoStyles} autoPlay loop muted={muted} ref={ref}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

export default VideoBackground;
