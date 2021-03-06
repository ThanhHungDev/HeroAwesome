import * as React from "react";

const SvgBorderStyle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M240 416h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm-96 0h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm192 0h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm96-192h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 96h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 96h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-288h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M432 32H32A32 32 0 000 64v400a16 16 0 0016 16h32a16 16 0 0016-16V96h368a16 16 0 0016-16V48a16 16 0 00-16-16z"
      className="border-style_svg__fa-primary"
    />
  </svg>
);

SvgBorderStyle.displayName = "SvgBorderStyle";
SvgBorderStyle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderStyle;
