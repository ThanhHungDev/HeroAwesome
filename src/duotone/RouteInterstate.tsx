import * as React from "react";

const SvgRouteInterstate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 512" {...props}>
    <path
      d="M475.24 224c-16.7 107.6-80.3 224.14-235.24 288C85.05 448.14 21.46 331.6 4.76 224z"
      opacity={0.4}
    />
    <path
      d="M1.1 192c-3.81-51.73 2.64-99.8 14.08-136.87 3.61-11.69 15-19.1 26.18-16a214.52 214.52 0 0058.1 8c49.12 0 93.61-16.07 126.17-42.1a23 23 0 0128.75 0c32.56 26 77.05 42.1 126.17 42.1a214.52 214.52 0 0058.1-8c11.26-3.15 22.58 4.29 26.18 16 11.43 37.09 17.88 85.16 14.07 136.87z"
      className="route-interstate_svg__fa-primary"
    />
  </svg>
);

SvgRouteInterstate.displayName = "SvgRouteInterstate";
SvgRouteInterstate.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRouteInterstate;
