import * as React from "react";

const SvgDiceD4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504.9 289.03L280.84 11.86C274.45 3.96 265.23 0 256 0s-18.45 3.96-24.85 11.86L7.1 289.03c-11.31 14-8.84 34.57 5.47 45.49l224.05 170.94c5.72 4.37 12.55 6.55 19.38 6.55s13.66-2.18 19.38-6.55l224.05-170.94c14.31-10.92 16.78-31.5 5.47-45.49zM31.99 309.14L240 51.75v416.04L31.99 309.14zM256.02 480h.03l-.01.01-.02-.01zM272 467.82v-416l208.02 257.26L272 467.82z" />
  </svg>
);

SvgDiceD4.displayName = "SvgDiceD4";
SvgDiceD4.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD4;
