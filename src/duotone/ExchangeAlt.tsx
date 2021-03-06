import * as React from "react";

const SvgExchangeAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M128 272v48h360a24 24 0 0124 24v16a24 24 0 01-24 24H128v48c0 21.44-25.94 32-41 17L7 369a24 24 0 010-33.94l80-80c15.14-15.12 41-4.35 41 16.94z"
      opacity={0.4}
    />
    <path
      d="M505 143.05a24 24 0 010 33.95l-80 80c-15 15-41 4.49-41-17v-48H24a24 24 0 01-24-24v-16a24 24 0 0124-24h360V80c0-21.36 25.9-32 41-17z"
      className="exchange-alt_svg__fa-primary"
    />
  </svg>
);

SvgExchangeAlt.displayName = "SvgExchangeAlt";
SvgExchangeAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExchangeAlt;
