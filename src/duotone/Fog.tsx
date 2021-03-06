import * as React from "react";

const SvgFog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M208 464H80a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16zm416 0H288a16 16 0 00-16 16v16a16 16 0 0016 16h336a16 16 0 0016-16v-16a16 16 0 00-16-16zm-48-64v-16a16 16 0 00-16-16H16a16 16 0 00-16 16v16a16 16 0 0016 16h544a16 16 0 0016-16z"
      opacity={0.4}
    />
    <path
      d="M64 224c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 01128 112 111.94 111.94 0 01240 0c43.3 0 80.4 24.8 99 60.8C353.7 43.3 375.4 32 400 32a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 010 192H160a96 96 0 01-96-96z"
      className="fog_svg__fa-primary"
    />
  </svg>
);

SvgFog.displayName = "SvgFog";
SvgFog.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFog;
