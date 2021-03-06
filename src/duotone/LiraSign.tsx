import * as React from "react";

const SvgLiraSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M0 232.82v41a11.71 11.71 0 00.29 2.63 12 12 0 0014.31 9.11l49.4-11V209L9.4 221.11A12 12 0 000 232.82zm0-96v41a11.71 11.71 0 00.29 2.63 12 12 0 0014.31 9.11l49.4-11V113L9.4 125.11A12 12 0 000 136.82zm287.71-61.24a12 12 0 00-14.31-9.12L144 95.22v65.56l134.6-29.88a12 12 0 009.4-11.72v-41a11.91 11.91 0 00-.29-2.6zm-14.31 86.88L144 191.22v65.56l134.6-29.89a12 12 0 009.4-11.71v-41a12 12 0 00-14.6-11.72z"
      opacity={0.4}
    />
    <path
      d="M64 468V44a12 12 0 0112-12h56a12 12 0 0112 12v372c86.18 0 168-48 168-148.75 0-6.34 5.64-11.25 12-11.25h48a12 12 0 0112 12v.42C378.84 402.17 289.67 480 155.58 480H76a12 12 0 01-12-12z"
      className="lira-sign_svg__fa-primary"
    />
  </svg>
);

SvgLiraSign.displayName = "SvgLiraSign";
SvgLiraSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLiraSign;
