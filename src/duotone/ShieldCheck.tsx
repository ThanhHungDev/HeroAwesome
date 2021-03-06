import * as React from "react";

const SvgShieldCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M466.5 83.67l-192-80a48.15 48.15 0 00-36.9 0l-192 80A48 48 0 0016 128c0 198.5 114.5 335.69 221.5 380.29a48.15 48.15 0 0036.9 0C360.1 472.58 496 349.27 496 128a48 48 0 00-29.5-44.33zm-47.2 114.21l-184 184a16.06 16.06 0 01-22.6 0l-104-104a16.07 16.07 0 010-22.61l22.6-22.6a16.07 16.07 0 0122.6 0l70.1 70.1 150.1-150.1a16.07 16.07 0 0122.6 0l22.6 22.6a15.89 15.89 0 010 22.61z"
      opacity={0.4}
    />
    <path
      d="M419.3 197.88l-184 184a16.06 16.06 0 01-22.6 0l-104-104a16.07 16.07 0 010-22.61l22.6-22.6a16.07 16.07 0 0122.6 0l70.1 70.1 150.1-150.1a16.07 16.07 0 0122.6 0l22.6 22.6a15.89 15.89 0 010 22.61z"
      className="shield-check_svg__fa-primary"
    />
  </svg>
);

SvgShieldCheck.displayName = "SvgShieldCheck";
SvgShieldCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShieldCheck;
