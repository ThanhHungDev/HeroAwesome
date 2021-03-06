import * as React from "react";

const SvgAllergies = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M416 112a32.09 32.09 0 00-32 32v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64a32 32 0 00-64 0v152a8 8 0 01-8 8h-16a8 8 0 01-8-8V32a32 32 0 00-64 0v184a8 8 0 01-8 8h-16a8 8 0 01-8-8V64a32 32 0 10-64 0v241l-23.6-32.49a40 40 0 00-64.73 47.03L133.28 492.2a48.08 48.08 0 0038.8 19.8H369.7a47.93 47.93 0 0046.7-37l26.5-112.68A201.29 201.29 0 00448 320V144a32.09 32.09 0 00-32-32zM176 288a16 16 0 11-16 16 16 16 0 0116-16zm0 127.92a16 16 0 1116-16 16 16 0 01-16 16zM240 448a16 16 0 1116-16 16 16 0 01-16 16zm0-96.07a16 16 0 1116-16 16 16 0 01-16 16zM304 384a16 16 0 1116-16 16 16 0 01-16 16zm32 63.91a16 16 0 1116-16 16 16 0 01-16 16zM368 320a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M176 288a16 16 0 1016 16 16 16 0 00-16-16zm64 128a16 16 0 1016 16 16 16 0 00-16-16zm64-64a16 16 0 1016 16 16 16 0 00-16-16zm64-64a16 16 0 1016 16 16 16 0 00-16-16z"
      className="allergies_svg__fa-primary"
    />
  </svg>
);

SvgAllergies.displayName = "SvgAllergies";
SvgAllergies.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAllergies;
