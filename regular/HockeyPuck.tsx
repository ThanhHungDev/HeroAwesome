import * as React from "react";

const SvgHockeyPuck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 544 512" {...props}>
    <path d="M272 48C136.6 48 0 87.6 0 176v144c0 94.5 136.8 144 272 144s272-49.5 272-144V176c0-88.4-136.6-128-272-128zm224 272c0 53-100.3 96-224 96S48 373 48 320v-66.3c101.2 67.2 346.8 67.2 448 0V320zm-224-64c-123.7 0-224-35.8-224-80s100.3-80 224-80 224 35.8 224 80-100.3 80-224 80z" />
  </svg>
);

SvgHockeyPuck.displayName = "SvgHockeyPuck";
SvgHockeyPuck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHockeyPuck;
