import * as React from "react";

const SvgWaveSine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M464 480c-90.52 0-132.84-107.94-173.8-212.31C258.64 187.2 222.88 96 176 96c-39.7 0-91.38 81.89-114.12 149a16 16 0 01-19.74 10.33l-30.72-9.21A16 16 0 01.84 225.68C19.55 169.79 82.16 32 176 32c90.52 0 132.84 107.94 173.8 212.31C381.36 324.8 417.12 416 464 416c39.7 0 91.38-81.89 114.12-149a16 16 0 0119.74-10.33l30.72 9.21a16 16 0 0110.58 20.43C620.45 342.21 557.84 480 464 480z"
      opacity={0.4}
    />
  </svg>
);

SvgWaveSine.displayName = "SvgWaveSine";
SvgWaveSine.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveSine;
