import * as React from "react";

const SvgChevronDoubleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M4.5 413.5l211-211.1c4.7-4.7 12.3-4.7 17 0l211 211.1c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L224 242.1 28.5 437.5c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.6-4.6-4.6-12.2.1-16.9zm0-111l7.1 7.1c4.7 4.7 12.3 4.7 17 0L224 114.1l195.5 195.5c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17l-211-211.1c-4.7-4.7-12.3-4.7-17 0L4.5 285.5c-4.7 4.7-4.7 12.3 0 17z" />
  </svg>
);

SvgChevronDoubleUp.displayName = "SvgChevronDoubleUp";
SvgChevronDoubleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronDoubleUp;