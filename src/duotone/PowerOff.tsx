import * as React from "react";

const SvgPowerOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M272 0a23.94 23.94 0 0124 24v240a23.94 23.94 0 01-24 24h-32a23.94 23.94 0 01-24-24V24a23.94 23.94 0 0124-24z"
      opacity={0.4}
    />
    <path
      d="M504 256c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4A248 248 0 01111.8 54.2a24.07 24.07 0 0135 7.7L162.6 90a24 24 0 01-6.6 31 168 168 0 00100 303c91.6 0 168.6-74.2 168-169.1a168.07 168.07 0 00-68.1-134 23.86 23.86 0 01-6.5-30.9l15.8-28.1a24 24 0 0134.8-7.8A247.51 247.51 0 01504 256z"
      className="power-off_svg__fa-primary"
    />
  </svg>
);

SvgPowerOff.displayName = "SvgPowerOff";
SvgPowerOff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPowerOff;
