import * as React from "react";

const SvgArrowFromBottom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M35.5 184l148-148.5c4.7-4.7 12.3-4.7 17 0l148 148.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L209 92.1V404c0 6.6-5.4 12-12 12h-10c-6.6 0-12-5.4-12-12V92.1L59.6 208c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.6-4.7-12.2 0-16.9zM384 468v-8c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12z" />
  </svg>
);

SvgArrowFromBottom.displayName = "SvgArrowFromBottom";
SvgArrowFromBottom.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowFromBottom;
