import * as React from "react";

const SvgTruckLoading = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M247.8 123.8a16 16 0 00-19.6-11.3L151 133.3l24.8 92.7-61.8 16.5-24.8-92.7-77.3 20.7A16 16 0 00.6 190.1l49.6 185.5a16 16 0 0019.6 11.3l216.4-58a16 16 0 0011.3-19.6zM544 320a96 96 0 1096 96 96 96 0 00-96-96z"
      opacity={0.4}
    />
    <path
      d="M384 0a32 32 0 00-32 32v323.6L5.9 450a8 8 0 00-5.6 9.8l12.6 46.3a8 8 0 009.8 5.6l393.7-107.4c0 .33 0 .66.05 1C421.91 339.7 477 288 544 288a127.71 127.71 0 0196 43.44V0zM175.8 226L151 133.3l-61.8 16.5 24.8 92.7z"
      className="truck-loading_svg__fa-primary"
    />
  </svg>
);

SvgTruckLoading.displayName = "SvgTruckLoading";
SvgTruckLoading.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTruckLoading;
