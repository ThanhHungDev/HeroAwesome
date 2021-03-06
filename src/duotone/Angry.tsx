import * as React from "react";

const SvgAngry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 240a31.87 31.87 0 0110.22-23.43l-30.82-9.24a16 16 0 019.2-30.66l80 24A16 16 0 01200 232h-1a32 32 0 11-63 8zm168.32 154.05c-27.93-33.26-84.59-33.26-112.62 0-13.57 16.23-38.38-4.18-24.72-20.41a105.93 105.93 0 01162 0c13.83 16.43-11.19 36.45-24.66 20.41zm77.28-186.72L350 216.8a32 32 0 11-53 15.2 16 16 0 01-4.61-31.32l80-24a16 16 0 119.2 30.65z"
      opacity={0.4}
    />
    <path
      d="M204.6 200.67l-80-24a16 16 0 00-9.2 30.66l30.82 9.24A32 32 0 10199 232h1a16 16 0 004.59-31.33zm187.73-13.27a16 16 0 00-19.93-10.72l-80 24A16 16 0 00297 232a32 32 0 1053-15.2l31.58-9.47a16 16 0 0010.76-19.9z"
      className="angry_svg__fa-primary"
    />
  </svg>
);

SvgAngry.displayName = "SvgAngry";
SvgAngry.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngry;
