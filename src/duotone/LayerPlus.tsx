import * as React from "react";

const SvgLayerPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M400 288c16.73 0 32.68-2.91 48-7.29v18.58l-181.36 82.2a25.68 25.68 0 01-21.29 0L12.41 275.9c-16.55-7.5-16.55-32.5 0-40l213.87-97C239.28 223.32 312 288 400 288z"
      opacity={0.4}
    />
    <path
      d="M499.59 364.1l-58.54-26.53-161.19 73.06a57.64 57.64 0 01-47.72 0L71 337.57 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59a25.68 25.68 0 0021.29 0l233-105.59c16.5-7.5 16.5-32.5-.05-40zM304 144h64v64a16 16 0 0016 16h32a16 16 0 0016-16v-64h64a16 16 0 0016-16V96a16 16 0 00-16-16h-64V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v64h-64a16 16 0 00-16 16v32a16 16 0 0016 16z"
      className="layer-plus_svg__fa-primary"
    />
  </svg>
);

SvgLayerPlus.displayName = "SvgLayerPlus";
SvgLayerPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLayerPlus;
