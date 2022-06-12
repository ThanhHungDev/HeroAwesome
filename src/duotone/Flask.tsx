import * as React from "react";

const SvgFlask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M138.07 320h171.84l72.93 117.29a6.4 6.4 0 01.09 7.12 6.11 6.11 0 01-5.88 3.52H70.89a6.08 6.08 0 01-5.89-3.46 6.45 6.45 0 01.11-7.18z"
      opacity={0.4}
    />
    <path
      d="M112 64h224a16 16 0 0016-16V16a16 16 0 00-16-16H112a16 16 0 00-16 16v32a16 16 0 0016 16zm325.19 339.5L320 215V96h-64v137.27l126.85 204a6.4 6.4 0 01.09 7.12 6.11 6.11 0 01-5.88 3.52H70.89a6.08 6.08 0 01-5.89-3.44 6.45 6.45 0 01.11-7.18L192 233.27V96h-64v119L10.79 403.5c-29.3 47.1 4.5 108.5 60.1 108.5h306.2c55.7 0 89.4-61.5 60.1-108.5z"
      className="flask_svg__fa-primary"
    />
  </svg>
);

SvgFlask.displayName = "SvgFlask";
SvgFlask.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlask;