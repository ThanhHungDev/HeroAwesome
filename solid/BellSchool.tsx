import * as React from "react";

const SvgBellSchool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M416 208C416 93.12 322.88 0 208 0S0 93.12 0 208s93.12 208 208 208 208-93.12 208-208zm-288 0c0-44.11 35.89-80 80-80s80 35.89 80 80-35.89 80-80 80-80-35.89-80-80zm128 0c0-26.51-21.49-48-48-48s-48 21.49-48 48 21.49 48 48 48 48-21.49 48-48zm208 112c-26.51 0-48 21.49-48 48 0 16.43 8.27 30.89 20.86 39.55C430.78 421.9 416.55 432 400 432h-48v-32.46C311.83 429.82 262.06 448 208 448s-103.83-18.18-144-48.46V480c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32h48c42.2 0 77.48-29.87 85.98-69.56 15.39-8 26.02-23.9 26.02-42.44 0-26.51-21.49-48-48-48z" />
  </svg>
);

SvgBellSchool.displayName = "SvgBellSchool";
SvgBellSchool.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellSchool;