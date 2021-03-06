import * as React from "react";

const SvgChevronDoubleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M349.5 475.5l-211.1-211c-4.7-4.7-4.7-12.3 0-17l211.1-211c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L178.1 256l195.5 195.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.6-12.3 4.6-17-.1zm-111 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L50.1 256 245.5 60.5c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0l-211.1 211c-4.7 4.7-4.7 12.3 0 17l211.1 211c4.8 4.8 12.4 4.8 17.1.1z" />
  </svg>
);

SvgChevronDoubleLeft.displayName = "SvgChevronDoubleLeft";
SvgChevronDoubleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronDoubleLeft;
