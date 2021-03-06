import * as React from "react";

const SvgTurtle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M552.28 137.25l-48.65-34.75c-35.17-17.42-80.49 1.57-86.81 40.31A63.4 63.4 0 00416 153v71.22a62.79 62.79 0 01-13.27 38.44A64.75 64.75 0 01351.05 288H18.6a18.6 18.6 0 00-5.89 36.24l98.29 22.1L66.17 424A16 16 0 0080 448h37a16 16 0 0013.86-8l40.3-69.8c26 8.52 45.55 13.8 84.87 13.8s58.89-5.28 84.87-13.8l40.3 69.8a16 16 0 0013.8 8h37a16 16 0 0013.86-24l-47.21-81.76c21.25-8.42 40.36-21.78 54.81-40.53A126.33 126.33 0 00478.74 240h40.62a56.65 56.65 0 0032.92-102.76zM480 176a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M68.25 256c-23.54 0-41-19.8-35.1-40 20-69 90.53-152 174.44-152h.82c83.92 0 154.43 83 174.45 152 5.87 20.24-11.56 40-35.1 40z"
      className="turtle_svg__fa-primary"
    />
  </svg>
);

SvgTurtle.displayName = "SvgTurtle";
SvgTurtle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTurtle;
