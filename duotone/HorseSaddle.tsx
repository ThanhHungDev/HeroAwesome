import * as React from "react";

const SvgHorseSaddle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M128 160v-26.12C90.8 147.11 64 182.27 64 224a96 96 0 0030.43 70.11l-25.61 68.37a64 64 0 00-2.16 38l24.85 99.41A16 16 0 00107 512h66a16 16 0 0015.52-19.88l-26.33-105.26L186 323.27l22 3.66v-72.54A95.83 95.83 0 01128 160zm447.94-83.4a31.75 31.75 0 00-8.59-21.8c-3.78-4-8.58-9.12-13.69-14.5 11.06-6.84 19.5-17.49 22.18-30.66a8.08 8.08 0 00-6.37-9.49 8 8 0 00-1.56-.15h-120A127.94 127.94 0 00320 127.11V160a95.83 95.83 0 01-80 94.39v77.87l80 13.32V496a16 16 0 0016 16h64a16 16 0 0016-16V318.22A111.49 111.49 0 00448 240c0-.22-.07-.42-.08-.64V224l.08-32a1.15 1.15 0 01-.08.41v-55.52h.08l15.93 7.11 18.9 37.7a32 32 0 0040.49 15.37l32.55-13A32 32 0 00576 154.31zm-64 19.4a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M0 248v56a16 16 0 0016 16h16a16 16 0 0016-16v-56a39.93 39.93 0 0116.36-32.26A95.65 95.65 0 0188.45 160H88a88 88 0 00-88 88zm160-120c-11.35 0-22 2.5-32 6.17V160a95.83 95.83 0 0080 94.39v72.54l32 5.33v-77.87A95.83 95.83 0 00320 160v-32.93c0 .32-.09.61-.09.93zm351.93-64a16 16 0 1016 16 16 16 0 00-16-16z"
      className="horse-saddle_svg__fa-primary"
    />
  </svg>
);

SvgHorseSaddle.displayName = "SvgHorseSaddle";
SvgHorseSaddle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorseSaddle;
