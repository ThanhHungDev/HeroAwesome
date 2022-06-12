import * as React from "react";

const SvgICursor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path
      d="M32 236v40a12 12 0 0012 12h52v-64H43.91A12 12 0 0032 236zm180.09-12H160v64h52a12 12 0 0012-12v-40a12 12 0 00-11.91-12z"
      opacity={0.4}
    />
    <path
      d="M160 400c0 44.94 57.89 48.55 83.85 48.24A12 12 0 01256 460.08v39.8a12 12 0 01-11.91 12c-35.09.23-78.36-.62-116.09-37.88-38.47 38-83.62 38.34-116.16 37.93a12 12 0 01-11.84-12V460a12 12 0 0112-12h.05c27.87 0 84-3.07 84-48V112.18c0-44.94-57.89-48.73-83.85-48.42A12 12 0 010 51.91v-39.8a12 12 0 0111.91-12C47-.11 90.27.74 128 38 166.47 0 211.62-.34 244.16.07a12 12 0 0111.84 12v40A12 12 0 01244 64c-27.92 0-84 3.25-84 48.18z"
      className="i-cursor_svg__fa-primary"
    />
  </svg>
);

SvgICursor.displayName = "SvgICursor";
SvgICursor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgICursor;
