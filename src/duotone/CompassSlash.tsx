import * as React from "react";

const SvgCompassSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M145 80.3A247.18 247.18 0 01320 8c137 0 248 111 248 248a246.76 246.76 0 01-33.83 125.08l-141-109 53-116c7.61-16.65-9.54-33.8-26.19-26.2L287.46 190.4zm75 301.84c-16.65 7.61-33.81-9.55-26.2-26.2l25.7-56.24-139-107.41A247.45 247.45 0 0072 256c0 137 111 248 248 248a246.64 246.64 0 00122.1-32.29L286.77 351.65z"
      opacity={0.4}
    />
    <path
      d="M636.64 480.55L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45z"
      className="compass-slash_svg__fa-primary"
    />
  </svg>
);

SvgCompassSlash.displayName = "SvgCompassSlash";
SvgCompassSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompassSlash;
