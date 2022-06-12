import * as React from "react";

const SvgPlaneDeparture = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 448v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h608a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M636.11 59.08c7.23 14.56 5.24 35.17-13.07 63.65-16.31 25.37-40.28 44.74-67 58.31l-291 147.65a65.79 65.79 0 01-29.64 7.12l-130.52.19a33 33 0 01-24.33-10.71l-76.21-83a18.28 18.28 0 015.57-28.08L50 193.86a17.8 17.8 0 0116.07 0l72.35 36.47 103.21-52.38L85.45 79.83a18.27 18.27 0 015.17-28.53l65.75-33.37a17.8 17.8 0 0118 1.11l218.7 82.06 98.51-50c26.74-13.55 56.42-21.41 86.28-19.47 33.51 2.18 51.04 12.88 58.25 27.45z"
      className="plane-departure_svg__fa-primary"
    />
  </svg>
);

SvgPlaneDeparture.displayName = "SvgPlaneDeparture";
SvgPlaneDeparture.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneDeparture;
