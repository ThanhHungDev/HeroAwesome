import * as React from "react";

const SvgTextWidth = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 32H16A16 16 0 000 48v80a16 16 0 0016 16h32a16 16 0 0016-16v-16h120v112h-24a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16h-24V112h120v16a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16zm-68.69 260.69C354 283.36 336 288.36 336 304v48H112v-48c0-14.31-17.31-21.32-27.31-11.31l-80 80a16 16 0 000 22.62l80 80C94 484.64 112 479.64 112 464v-48h224v48c0 14.31 17.31 21.33 27.31 11.31l80-80a16 16 0 000-22.62z" />
  </svg>
);

SvgTextWidth.displayName = "SvgTextWidth";
SvgTextWidth.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTextWidth;
