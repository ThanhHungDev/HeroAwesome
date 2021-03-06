import * as React from "react";

const SvgWebcam = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M224 96a128 128 0 10128 128A128 128 0 00224 96zm0 80a48.05 48.05 0 00-48 48 16 16 0 01-32 0 80.09 80.09 0 0180-80 16 16 0 110 32z"
      opacity={0.4}
    />
    <path
      d="M401 438.6l-49.19-30.75C409.88 367.39 448 300.19 448 224 448 100.29 347.71 0 224 0S0 100.29 0 224c0 76.19 38.12 143.39 96.23 183.85L47 438.6a32 32 0 00-15 27.14V480a32 32 0 0032 32h320a32 32 0 0032-32v-14.26a32 32 0 00-15-27.14zM224 384a160 160 0 11160-160 160 160 0 01-160 160z"
      className="webcam_svg__fa-primary"
    />
  </svg>
);

SvgWebcam.displayName = "SvgWebcam";
SvgWebcam.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWebcam;
