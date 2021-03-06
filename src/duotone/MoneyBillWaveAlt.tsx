import * as React from "react";

const SvgMoneyBillWaveAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M320 352c-44.19 0-80-43-80-96s35.82-96 80-96 80 43 80 96-35.83 96-80 96z"
      opacity={0.4}
    />
    <path
      d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.19 0-246.34 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72A34 34 0 0032.25 79C15 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72a34.34 34.34 0 0010.35 1.63C625 433 640 419.67 640 401.18V83.93c0-12.64-7.23-24.6-18.84-29.47zM320 352c-44.19 0-80-43-80-96s35.82-96 80-96 80 43 80 96-35.83 96-80 96z"
      className="money-bill-wave-alt_svg__fa-primary"
    />
  </svg>
);

SvgMoneyBillWaveAlt.displayName = "SvgMoneyBillWaveAlt";
SvgMoneyBillWaveAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoneyBillWaveAlt;
