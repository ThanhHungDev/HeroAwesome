import * as React from "react";

const SvgHandPointUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M0 224c0-34.22 35.1-57.75 66.91-44.12A135.83 135.83 0 0191.83 194V44.8c0-23.45 20.54-44.8 43.82-44.8 23.63 0 43.83 20.65 43.83 44.8v99.85c17.05-16.34 49.76-18.35 70.94 6.3 22.83-14.29 53-2.15 62.32 16.45 49.14-9 71.26 21.95 71.26 72.6 0 2.75-.2 13.28-.2 16 .17 62-31.06 76.89-38.31 123.73a24 24 0 01-23.7 20.27H150.26a48 48 0 01-43.84-28.47c-13-28.88-49-95.41-77.33-107.53C10.9 256.2 0 242.62 0 224z"
      opacity={0.4}
    />
    <path
      d="M328 416H136a24 24 0 00-24 24v48a24 24 0 0024 24h192a24 24 0 0024-24v-48a24 24 0 00-24-24zm-24 68a20 20 0 1120-20 20 20 0 01-20 20z"
      className="hand-point-up_svg__fa-primary"
    />
  </svg>
);

SvgHandPointUp.displayName = "SvgHandPointUp";
SvgHandPointUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandPointUp;
