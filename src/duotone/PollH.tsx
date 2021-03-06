import * as React from "react";

const SvgPollH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zM96 144a16 16 0 0116-16h128a16 16 0 0116 16v32a16 16 0 01-16 16H112a16 16 0 01-16-16zm96 224a16 16 0 01-16 16h-64a16 16 0 01-16-16v-32a16 16 0 0116-16h64a16 16 0 0116 16zm160-96a16 16 0 01-16 16H112a16 16 0 01-16-16v-32a16 16 0 0116-16h224a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M112 192h128a16 16 0 0016-16v-32a16 16 0 00-16-16H112a16 16 0 00-16 16v32a16 16 0 0016 16zm64 128h-64a16 16 0 00-16 16v32a16 16 0 0016 16h64a16 16 0 0016-16v-32a16 16 0 00-16-16zm160-96H112a16 16 0 00-16 16v32a16 16 0 0016 16h224a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="poll-h_svg__fa-primary"
    />
  </svg>
);

SvgPollH.displayName = "SvgPollH";
SvgPollH.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPollH;
