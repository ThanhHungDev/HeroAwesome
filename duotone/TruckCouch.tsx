import * as React from "react";

const SvgTruckCouch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M21.4 235.1c39.6-10.6 73.7 13.4 85.5 43.4L232 245c-5.4-35.7 16.5-70.7 52.2-80.2 2.6-.7 5.3-.7 8-1.1-9.9-36.9-45.9-55.1-78.7-46.3L58.9 158.8c-32.8 8.8-54.8 42.6-45.1 79.1a69.24 69.24 0 017.6-2.8zm271-39.5a40.07 40.07 0 00-28.3 49l6.2 23.2-185.4 49.7-6.2-23.2A40 40 0 101.4 315l22.7 85L320 320.7v-122a40.16 40.16 0 00-27.6-3.1zM544 320a96 96 0 1096 96 96 96 0 00-96-96z"
      opacity={0.4}
    />
    <path
      d="M384 0a32 32 0 00-32 32v323.6L5.9 450a8 8 0 00-5.6 9.8l12.6 46.3a8 8 0 009.8 5.6l393.7-107.4c0 .33 0 .66.05 1C421.91 339.7 477 288 544 288a127.71 127.71 0 0196 43.44V0z"
      className="truck-couch_svg__fa-primary"
    />
  </svg>
);

SvgTruckCouch.displayName = "SvgTruckCouch";
SvgTruckCouch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTruckCouch;
