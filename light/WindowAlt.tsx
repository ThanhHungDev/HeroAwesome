import * as React from "react";

const SvgWindowAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M224 160c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm64-48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48zm-32 144H32v208c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V224zm0-32V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v112h448z" />
  </svg>
);

SvgWindowAlt.displayName = "SvgWindowAlt";
SvgWindowAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowAlt;
