import * as React from "react";

const SvgTriangleMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256.07 256A64.69 64.69 0 10311 287.68L509.66 89a8 8 0 000-11.31l-11.31-11.35a8 8 0 00-11.31 0L288.38 265.05a63.34 63.34 0 00-32.31-9.05zm0 96a32 32 0 1132-32 32 32 0 01-32 32zM413 230.88l-23.25 23.25 80.83 130.81a60.79 60.79 0 011.42 62.39A64.17 64.17 0 01415.86 480H96.14A64.18 64.18 0 0140 447.31a60.79 60.79 0 011.43-62.39l159.87-258.7a64.69 64.69 0 01109.47 0l27.2 44L361.18 147 338 109.38C323.26 85.61 299.22 70.54 272.06 66V8a8 8 0 00-8-8h-16a8 8 0 00-8 8v58c-27.21 4.49-51.31 19.57-66 43.4L14.19 368.09A92.46 92.46 0 0012 462.91 96.16 96.16 0 0096.14 512h319.72A96.16 96.16 0 00500 462.91a92.46 92.46 0 00-2.16-94.82z" />
  </svg>
);

SvgTriangleMusic.displayName = "SvgTriangleMusic";
SvgTriangleMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTriangleMusic;
