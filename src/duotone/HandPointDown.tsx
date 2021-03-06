import * as React from "react";

const SvgHandPointDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M383.81 256c0 2.72.19 13.25.19 16 0 50.65-22.12 81.57-71.26 72.6-9.3 18.6-39.49 30.74-62.32 16.45-21.17 24.64-53.89 22.64-70.94 6.3v99.85c0 24.15-20.2 44.8-43.83 44.8-23.28 0-43.82-21.35-43.82-44.8V318a135.83 135.83 0 01-24.92 14.15C35.1 345.75 0 322.22 0 288c0-18.62 10.9-32.2 29.09-40 28.29-12.12 64.33-78.65 77.33-107.53A48 48 0 01150.26 112h171.53a24 24 0 0123.7 20.27C352.74 179.11 384 194 383.81 256z"
      opacity={0.4}
    />
    <path
      d="M328 0H136a24 24 0 00-24 24v48a24 24 0 0024 24h192a24 24 0 0024-24V24a24 24 0 00-24-24zm-24 68a20 20 0 1120-20 20 20 0 01-20 20z"
      className="hand-point-down_svg__fa-primary"
    />
  </svg>
);

SvgHandPointDown.displayName = "SvgHandPointDown";
SvgHandPointDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandPointDown;
