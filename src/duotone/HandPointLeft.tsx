import * as React from "react";

const SvgHandPointLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M400 214.26v171.53a24 24 0 01-20.27 23.7C332.89 416.74 318 448 256 447.81c-2.72 0-13.25.19-16 .19-50.65 0-81.57-22.12-72.6-71.26-18.6-9.3-30.74-39.49-16.45-62.32-24.64-21.17-22.64-53.89-6.3-70.94H44.8c-24.15 0-44.8-20.2-44.8-43.83 0-23.28 21.35-43.82 44.8-43.82H194a135.83 135.83 0 01-14.15-24.92C166.25 99.1 189.78 64 224 64c18.62 0 32.2 10.9 40 29.09 12.12 28.29 78.65 64.33 107.53 77.33A48 48 0 01400 214.26z"
      opacity={0.4}
    />
    <path
      d="M488 176h-48a24 24 0 00-24 24v192a24 24 0 0024 24h48a24 24 0 0024-24V200a24 24 0 00-24-24zm-24 212a20 20 0 1120-20 20 20 0 01-20 20z"
      className="hand-point-left_svg__fa-primary"
    />
  </svg>
);

SvgHandPointLeft.displayName = "SvgHandPointLeft";
SvgHandPointLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandPointLeft;
