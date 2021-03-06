import * as React from "react";

const SvgCarrot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M298.15 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2a16 16 0 11-22.6 22.6l-50.2-50.2L2.25 479.7a22.68 22.68 0 000 19.7 22.48 22.48 0 0030 10.3l133.6-65.2-49.2-49.2a15.87 15.87 0 010-22.6 16.06 16.06 0 0122.6 0l57 57 102-49.8a124.23 124.23 0 00-.1-223.3z"
      opacity={0.4}
    />
    <path
      d="M390.25 121.7c40.7-19.5 88.8-9.4 121.7 30.3-41.6 50.3-107.5 52.5-151.9 7.9l-8-8C307.45 107.5 309.65 41.7 360 0c39.7 32.9 49.8 81 30.3 121.7z"
      className="carrot_svg__fa-primary"
    />
  </svg>
);

SvgCarrot.displayName = "SvgCarrot";
SvgCarrot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCarrot;
