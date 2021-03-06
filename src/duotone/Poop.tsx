import * as React from "react";

const SvgPoop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M480 311v2a70.89 70.89 0 01-27.34 56 71.2 71.2 0 00-11.66-1H71a71.2 71.2 0 00-11.66 1A70.89 70.89 0 0132 313v-2a71 71 0 0171-71h306a71 71 0 0171 71z"
      opacity={0.4}
    />
    <path
      d="M118.05 240H394a63.76 63.76 0 00-42-112h-5.88a98.21 98.21 0 004.36-50.78A94.18 94.18 0 00240.91 1.55 79.78 79.78 0 01176 128h-16a63.76 63.76 0 00-42 112zm333.33 129.17l.42-.33A71.12 71.12 0 00441 368H71a70.69 70.69 0 00-10.76.84c.14.11.27.23.42.33A71.87 71.87 0 0072 512h368a71.87 71.87 0 0011.36-142.86z"
      className="poop_svg__fa-primary"
    />
  </svg>
);

SvgPoop.displayName = "SvgPoop";
SvgPoop.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoop;
