import * as React from "react";

const SvgStop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z" />
  </svg>
);

SvgStop.displayName = "SvgStop";
SvgStop.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStop;
