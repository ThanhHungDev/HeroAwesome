import * as React from "react";

const SvgDroneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M264 112H24a24 24 0 000 48h240a24 24 0 000-48zm352 0H376a24 24 0 000 48h240a24 24 0 000-48z"
      opacity={0.4}
    />
    <path
      d="M472 192v45.65l-96.83-29.05a191.93 191.93 0 00-110.34 0L168 237.65V192h-48v64.05a32 32 0 0032 32h45.41a179 179 0 00-53.33 110.24 16.14 16.14 0 0016 17.71h16.26c8.33 0 14.75-6.58 15.68-14.87a130 130 0 0153.66-91.38l32.93 32.93a32 32 0 0022.62 9.37h37.49a32 32 0 0022.63-9.37l32.93-32.93A130 130 0 01448 401.13c.93 8.29 7.35 14.85 15.68 14.87h16.22a16.13 16.13 0 0016-17.71 178.94 178.94 0 00-53.32-110.24H488a32 32 0 0032-32V192zM144 96a23.68 23.68 0 00-22.23 16h44.5A23.72 23.72 0 00144 96zm352 0a23.68 23.68 0 00-22.23 16h44.5A23.72 23.72 0 00496 96z"
      className="drone-alt_svg__fa-primary"
    />
  </svg>
);

SvgDroneAlt.displayName = "SvgDroneAlt";
SvgDroneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDroneAlt;
