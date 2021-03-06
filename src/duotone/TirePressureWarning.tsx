import * as React from "react";

const SvgTirePressureWarning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 284.08c0 76.81-32.54 146.14-80 195.92v16a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16h-32v16a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16h-32v16a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16h-32v16a16 16 0 01-16 16H96a16 16 0 01-16-16v-16C32.54 430.22 0 360.89 0 284.08a286.45 286.45 0 0137.5-142.53C53.67 113.26 64 80.62 64 46.09V17.14C64 7.67 71.16 0 80 0h32a16 16 0 0116 16v48c0 32-15.23 74.85-34.93 109.31A223.34 223.34 0 0064 284.08c0 41.12 12.75 82.49 35.8 118.12 5.72 8.84 16 13.79 26.48 13.79h259.44c10.53 0 20.76-4.94 26.48-13.79 23.05-35.63 35.8-77 35.8-118.12a223.37 223.37 0 00-29.06-110.77C399.23 138.85 384 96 384 64V16a16 16 0 0116-16h32c8.84 0 16 7.67 16 17.14v29c0 34.52 10.33 67.17 26.5 95.45A286.51 286.51 0 01512 284.08z"
      opacity={0.4}
    />
    <path
      d="M278.32 96h-44.64a16 16 0 00-15.92 17.59l12.8 128A16 16 0 00246.48 256h19a16 16 0 0015.92-14.41l12.8-128A16 16 0 00278.32 96zM256 288a32 32 0 1032 32 32 32 0 00-32-32z"
      className="tire-pressure-warning_svg__fa-primary"
    />
  </svg>
);

SvgTirePressureWarning.displayName = "SvgTirePressureWarning";
SvgTirePressureWarning.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTirePressureWarning;
