import * as React from "react";

const SvgBatteryBolt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M64 160h92.28l7.66-64H48a48 48 0 00-48 48v224a48 48 0 0048 48h180.61l14.17-64H64zm552 0h-8v-16a48 48 0 00-48-48H405.38l-9.95 48h33.35a65.73 65.73 0 0143.11 16H544v64h32v64h-32v64H427.17l-36.62 64H560a48 48 0 0048-48v-16h8a24 24 0 0024-24V184a24 24 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M445.39 223.52l-140.77 246A19 19 0 01288 480c-12.26 0-21.55-12.56-18.67-25.84l36.84-166.39h-95c-11.6 0-20.56-11.18-19-23.77l25.6-213.78C219 39.79 227.18 32 236.8 32h108.8c12.6 0 21.8 13.09 18.55 26.41L336.46 192h92.32c14.78 0 24.01 17.55 16.61 31.52z"
      className="battery-bolt_svg__fa-primary"
    />
  </svg>
);

SvgBatteryBolt.displayName = "SvgBatteryBolt";
SvgBatteryBolt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBatteryBolt;
