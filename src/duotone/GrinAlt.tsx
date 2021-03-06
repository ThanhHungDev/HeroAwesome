import * as React from "react";

const SvgGrinAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm63.7 128.7a19.76 19.76 0 0132.7 0c12.4 18.4 15.1 36.9 15.7 55.3-.5 18.4-3.3 36.9-15.7 55.3a19.76 19.76 0 01-32.7 0c-12.4-18.4-15.1-36.9-15.7-55.3.5-18.4 3.3-36.9 15.7-55.3zm-160 0a19.76 19.76 0 0132.7 0c12.4 18.4 15.1 36.9 15.7 55.3-.5 18.4-3.3 36.9-15.7 55.3a19.76 19.76 0 01-32.7 0c-12.4-18.4-15.1-36.9-15.7-55.3.5-18.4 3.3-36.9 15.7-55.3zm240.1 202c-9.3 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3a16 16 0 0120.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2a16 16 0 0120.7 17.9z"
      opacity={0.4}
    />
    <path
      d="M151.7 136.7c-12.4 18.4-15.2 36.9-15.7 55.3.6 18.4 3.3 36.9 15.7 55.3a19.76 19.76 0 0032.7 0c12.4-18.4 15.2-36.9 15.7-55.3-.6-18.4-3.3-36.9-15.7-55.3a19.76 19.76 0 00-32.7 0zm192.7 0a19.76 19.76 0 00-32.7 0c-12.4 18.4-15.2 36.9-15.7 55.3.6 18.4 3.3 36.9 15.7 55.3a19.76 19.76 0 0032.7 0c12.4-18.4 15.2-36.9 15.7-55.3-.6-18.4-3.3-36.9-15.7-55.3z"
      className="grin-alt_svg__fa-primary"
    />
  </svg>
);

SvgGrinAlt.displayName = "SvgGrinAlt";
SvgGrinAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrinAlt;
