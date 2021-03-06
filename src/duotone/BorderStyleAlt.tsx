import * as React from "react";

const SvgBorderStyleAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M208 96h32a16 16 0 0016-16V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zm96 0h32a16 16 0 0016-16V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16zM16 288h32a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm0-96h32a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm0-96h32a16 16 0 0016-16V48a16 16 0 00-16-16H16A16 16 0 000 48v32a16 16 0 0016 16zm0 288h32a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M432 32h-32a16 16 0 00-16 16v368H16a16 16 0 00-16 16v32a16 16 0 0016 16h400a32 32 0 0032-32V48a16 16 0 00-16-16z"
      className="border-style-alt_svg__fa-primary"
    />
  </svg>
);

SvgBorderStyleAlt.displayName = "SvgBorderStyleAlt";
SvgBorderStyleAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderStyleAlt;
