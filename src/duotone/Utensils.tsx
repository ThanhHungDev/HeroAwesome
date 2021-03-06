import * as React from "react";

const SvgUtensils = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 416 512" {...props}>
    <path
      d="M416 24v464a23.94 23.94 0 01-24 24h-56a24 24 0 01-23.9-26l15-185.1C170.6 178.5 309.5 0 392 0a24 24 0 0124 24z"
      opacity={0.4}
    />
    <path
      d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7a24.06 24.06 0 01-24 25.3H80a24.06 24.06 0 01-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1z"
      className="utensils_svg__fa-primary"
    />
  </svg>
);

SvgUtensils.displayName = "SvgUtensils";
SvgUtensils.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUtensils;
