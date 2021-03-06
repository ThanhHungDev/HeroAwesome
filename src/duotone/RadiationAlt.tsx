import * as React from "react";

const SvgRadiationAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 288a32 32 0 10-32-32 32 32 0 0032 32zm0 216c137 0 248-111 248-248S385 8 248 8 0 119 0 256s111 248 248 248zm0-432c101.5 0 184 82.5 184 184s-82.5 184-184 184S64 357.5 64 256 146.5 72 248 72z"
      opacity={0.4}
    />
    <path
      d="M104.9 256H184a63.76 63.76 0 0130.2-54.1l-41.7-66.8a16.2 16.2 0 00-22.37-5 17 17 0 00-1.61 1.17A159.25 159.25 0 0089 239.1c-1.1 9.2 6.7 16.9 15.9 16.9zm207.1 0h79.1c9.2 0 16.9-7.7 16-16.8-4.6-43.6-27-81.8-59.5-107.8a16.22 16.22 0 00-22.83 2.19 18.34 18.34 0 00-1.17 1.61L281.9 202a63.64 63.64 0 0130.1 54zM172.4 377c-4.9 7.8-2.4 18.4 5.8 22.5a156.1 156.1 0 00139.7 0c8.2-4.1 10.6-14.7 5.8-22.5l-41.8-66.9a62.82 62.82 0 01-67.7 0z"
      className="radiation-alt_svg__fa-primary"
    />
  </svg>
);

SvgRadiationAlt.displayName = "SvgRadiationAlt";
SvgRadiationAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadiationAlt;
