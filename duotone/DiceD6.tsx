import * as React from "react";

const SvgDiceD6 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M25.87 124.42a8.54 8.54 0 01-.06-14.42l166-100.88a61.72 61.72 0 0164.43 0L422.19 110a8.54 8.54 0 01-.05 14.47L224 242.55z"
      opacity={0.4}
    />
    <path
      d="M0 161.83v197.7c0 23.77 12.11 45.74 31.79 57.7L184 509.71c10.67 6.48 24.05-1.54 24.05-14.44V271.46L12 154.58c-5.36-3.17-12 .85-12 7.25zm436-7.25L240 271.46v223.82c0 12.89 13.39 20.92 24.05 14.43l152.16-92.48c19.68-12 31.79-33.94 31.79-57.7v-197.7c0-6.41-6.64-10.42-12-7.25z"
      className="dice-d6_svg__fa-primary"
    />
  </svg>
);

SvgDiceD6.displayName = "SvgDiceD6";
SvgDiceD6.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD6;
