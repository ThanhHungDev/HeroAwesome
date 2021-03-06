import * as React from "react";

const SvgTableTennis = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M496.28 296.48c31.5-77.81 15.8-170.31-47.2-233.4-83.9-84.1-220-84.1-303.9 0l-56 56.09 211.5 211.5c46.1-62.09 131.5-77.4 195.6-34.19zM416.08 320a96 96 0 1096 96 96 96 0 00-96-96z"
      opacity={0.4}
    />
    <path
      d="M5.78 452.77a19.7 19.7 0 011-28.8l103-89.39L75.28 300c-39-39.09-44.6-98.79-17.3-144.09l220.4 220.29c-3.7 12.71-6.3 25.91-6.2 39.71a142.53 142.53 0 0011 55.09c-25.7-2.8-50.6-13.59-70.3-33.3l-35.7-35.7-89.3 103.3a19.59 19.59 0 01-28.7 1z"
      className="table-tennis_svg__fa-primary"
    />
  </svg>
);

SvgTableTennis.displayName = "SvgTableTennis";
SvgTableTennis.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTableTennis;
