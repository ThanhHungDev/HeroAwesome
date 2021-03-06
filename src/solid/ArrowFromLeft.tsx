import * as React from "react";

const SvgArrowFromLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M0 424V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm254.5-269.6l65.6 65.6H120c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h200.1l-65.6 65.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L441 273c9.4-9.4 9.4-24.6 0-33.9L305.5 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6-.1 33.9z" />
  </svg>
);

SvgArrowFromLeft.displayName = "SvgArrowFromLeft";
SvgArrowFromLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowFromLeft;
