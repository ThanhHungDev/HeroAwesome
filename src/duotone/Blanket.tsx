import * as React from "react";

const SvgBlanket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 464v32a16 16 0 01-16 16H128C57.17 512-.41 454.17 0 383.25.41 312.62 58.78 256 129.41 256H432a80.09 80.09 0 0180 80.79c-.43 44-37 79.21-81 79.21H128a32 32 0 01-32-32.9c.48-17.43 15.22-31.1 32.66-31.1H432a16 16 0 0016-16.81c-.42-8.59-7.84-15.19-16.44-15.19H128a64.06 64.06 0 00-64 65c.53 35.12 29.84 63 65 63h367a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M512 96s-.07 179.79-.28 233.47A80.1 80.1 0 00432 256H129.41C58.78 256 .41 312.62 0 383.25v.73V96A96.14 96.14 0 0196 0h320a96.14 96.14 0 0196 96z"
      className="blanket_svg__fa-primary"
    />
  </svg>
);

SvgBlanket.displayName = "SvgBlanket";
SvgBlanket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlanket;
