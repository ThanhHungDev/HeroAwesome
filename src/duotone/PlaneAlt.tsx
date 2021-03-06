import * as React from "react";

const SvgPlaneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M197.2 200.4c-32.6 1 150.5-.4 150.5-.4l-38.6-72H324a12 12 0 0012-12V76a12 12 0 00-12-12h-49.2L243.5 5.7A12.18 12.18 0 00233.3 0h-57.8a11.94 11.94 0 00-11.6 15zm0 111.2L163.9 497a12 12 0 0011.6 15h57.8a12 12 0 0010.2-5.7l31.3-58.3H324a12 12 0 0012-12v-40a12 12 0 00-12-12h-14.9l38.6-72s-183.1-1.4-150.5-.4z"
      opacity={0.4}
    />
    <path
      d="M576 256c0 30.9-46.6 56-104 56l-274.8-.4a755.21 755.21 0 01-89.9-7.8l-39.8 66.4a12.08 12.08 0 01-10.3 5.8H14.6a12 12 0 01-11.7-14.4l16.5-82.8C6.9 271.9 0 264.1 0 256s6.9-15.9 19.4-22.8L2.8 150.4A12 12 0 0114.6 136h42.6a12.08 12.08 0 0110.3 5.8l39.8 66.4a755.21 755.21 0 0189.9-7.8L472 200c57.4 0 104 25.1 104 56z"
      className="plane-alt_svg__fa-primary"
    />
  </svg>
);

SvgPlaneAlt.displayName = "SvgPlaneAlt";
SvgPlaneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneAlt;
