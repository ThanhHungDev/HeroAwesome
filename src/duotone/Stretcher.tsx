import * as React from "react";

const SvgStretcher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M515.78 394.93a62.25 62.25 0 00-56.18-7.3l-43-37.63L524 256h-97.2L368 307.48 309.17 256H212l107.4 94-43 37.63a62.25 62.25 0 00-56.18 7.3 64.11 64.11 0 1098.53 40.69l49.25-43.1 49.25 43.1a64 64 0 1098.53-40.69zM256 464a16 16 0 1116-16 16 16 0 01-16 16zm224 0a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M640 160v32a32 32 0 01-32 32H177.62a64 64 0 01-47.84-21.48l-121.7-128a32 32 0 012.66-45.17L34.66 8.08a32 32 0 0145.18 2.66L192 128h416a32 32 0 0132 32z"
      className="stretcher_svg__fa-primary"
    />
  </svg>
);

SvgStretcher.displayName = "SvgStretcher";
SvgStretcher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStretcher;
