import * as React from "react";

const SvgHexagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zm84.3 224.3l-112 192c-2.9 4.9-8.2 7.9-13.8 7.9H176c-5.7 0-11-3-13.8-7.9l-112-192c-2.9-5-2.9-11.2 0-16.1l112-192c2.8-5 8.1-8 13.8-8h224c5.7 0 11 3 13.8 7.9l112 192c2.9 5 2.9 11.2 0 16.2z" />
  </svg>
);

SvgHexagon.displayName = "SvgHexagon";
SvgHexagon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHexagon;