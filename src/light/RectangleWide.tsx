import * as React from "react";

const SvgRectangleWide = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 96H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm16 272c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h544c8.8 0 16 7.2 16 16v224z" />
  </svg>
);

SvgRectangleWide.displayName = "SvgRectangleWide";
SvgRectangleWide.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRectangleWide;
