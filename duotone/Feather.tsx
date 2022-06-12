import * as React from "react";

const SvgFeather = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M483.4 244.2L351.85 288h97.78c-9.92 10.68 3.68-3.07-46.3 46.86L255.75 384h98.19c-74.94 73.11-194.52 70.65-246.82 54.94l-.06-.05L305 241a24 24 0 00-34-34L73.19 404.87l-.2-.21c-12.13-40.37-26.12-166.28 56.11-248.43 24.78-24.74 7.15-7.14 85.75-85.66 90.61-90.51 189.73-88.21 252.28-25.73 50.58 50.52 61.7 124.9 16.27 199.36z"
      opacity={0.4}
    />
    <path
      d="M24 512a24 24 0 01-17-41l264-264a24 24 0 0134 34L41 505a23.92 23.92 0 01-17 7z"
      className="feather_svg__fa-primary"
    />
  </svg>
);

SvgFeather.displayName = "SvgFeather";
SvgFeather.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFeather;
