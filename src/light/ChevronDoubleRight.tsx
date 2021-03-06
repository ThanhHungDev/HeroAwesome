import * as React from "react";

const SvgChevronDoubleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M34.5 36.5l211.1 211c4.7 4.7 4.7 12.3 0 17l-211.1 211c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L205.9 256 10.5 60.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.6-4.6 12.2-4.6 16.9.1zm111 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L333.9 256 138.5 451.5c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l211.1-211c4.7-4.7 4.7-12.3 0-17l-211.1-211c-4.8-4.8-12.4-4.8-17.1-.1z" />
  </svg>
);

SvgChevronDoubleRight.displayName = "SvgChevronDoubleRight";
SvgChevronDoubleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronDoubleRight;
