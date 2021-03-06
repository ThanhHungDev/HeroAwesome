import * as React from "react";

const SvgWrench = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M322 280.47l-.26.26a144.62 144.62 0 01-90.3-90.64L18.09 403.41a64 64 0 0090.5 90.5L322 280.49zM63.35 472.65a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M469.69 246.2c-40 40-97.48 51-147.72 34.27l-.26.26a144.64 144.64 0 01-90.41-90.94l.13-.13c-16.54-50.17-5.6-107.71 34.13-147.4a144.38 144.38 0 01136.91-38 12 12 0 015.67 20.19l-74.53 74.48 11.33 68L413 178.28l74.53-74.52a12 12 0 0120.17 5.52 144 144 0 01-38.01 136.92z"
      className="wrench_svg__fa-primary"
    />
  </svg>
);

SvgWrench.displayName = "SvgWrench";
SvgWrench.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWrench;
