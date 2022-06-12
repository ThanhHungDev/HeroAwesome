import * as React from "react";

const SvgHandPointRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 199.65c0 23.63-20.65 43.83-44.8 43.83h-99.85c16.34 17 18.34 49.76-6.3 70.94 14.29 22.83 2.15 53-16.45 62.32 9 49.14-22 71.26-72.6 71.26-2.75 0-13.28-.2-16-.19-62 .16-76.89-31.07-123.73-38.32a24 24 0 01-20.27-23.7V214.26a48 48 0 0128.47-43.84c28.88-13 95.41-49 107.53-77.33C255.8 74.9 269.38 64 288 64c34.22 0 57.75 35.1 44.12 66.91A135.83 135.83 0 01318 155.83h149.2c23.45 0 44.8 20.54 44.8 43.82z"
      opacity={0.4}
    />
    <path
      d="M72 176H24a24 24 0 00-24 24v192a24 24 0 0024 24h48a24 24 0 0024-24V200a24 24 0 00-24-24zM48 388a20 20 0 1120-20 20 20 0 01-20 20z"
      className="hand-point-right_svg__fa-primary"
    />
  </svg>
);

SvgHandPointRight.displayName = "SvgHandPointRight";
SvgHandPointRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandPointRight;
