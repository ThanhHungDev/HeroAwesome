import * as React from "react";

const SvgExpandAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 456V344c0-21.38 25.8-32.09 40.92-17L72 360l92.69-92.69a16 16 0 0122.62 0l25.38 25.38a16 16 0 010 22.62L120 408l32.92 31c15.12 15.12 4.41 41-17 41H24a24 24 0 01-24-24z"
      opacity={0.4}
    />
    <path
      d="M235.31 196.69L328 104l-32.92-31c-15.12-15.12-4.41-41 17-41h112A24 24 0 01448 56v112c0 21.38-25.8 32.09-40.92 17L376 152l-92.69 92.69a16 16 0 01-22.62 0l-25.38-25.38a16 16 0 010-22.62z"
      className="expand-alt_svg__fa-primary"
    />
  </svg>
);

SvgExpandAlt.displayName = "SvgExpandAlt";
SvgExpandAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExpandAlt;
