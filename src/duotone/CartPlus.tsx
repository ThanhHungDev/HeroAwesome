import * as React from "react";

const SvgCartPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M552 64H159.21l52.36 256h293.15a24 24 0 0023.4-18.68l47.27-208a24 24 0 00-18.08-28.72A23.69 23.69 0 00552 64zM448 200a16 16 0 01-16 16h-40v40a16 16 0 01-16 16h-16a16 16 0 01-16-16v-40h-40a16 16 0 01-16-16v-16a16 16 0 0116-16h40v-40a16 16 0 0116-16h16a16 16 0 0116 16v40h40a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M504.42 405.6l5.52-24.28a24 24 0 00-23.4-29.32H218.12L150 19.19A24 24 0 00126.53 0H24A24 24 0 000 24v16a24 24 0 0024 24h69.88l70.25 343.43a56 56 0 1067.05 8.57h209.64a56 56 0 1063.6-10.4zM304 216h40v40a16 16 0 0016 16h16a16 16 0 0016-16v-40h40a16 16 0 0016-16v-16a16 16 0 00-16-16h-40v-40a16 16 0 00-16-16h-16a16 16 0 00-16 16v40h-40a16 16 0 00-16 16v16a16 16 0 0016 16z"
      className="cart-plus_svg__fa-primary"
    />
  </svg>
);

SvgCartPlus.displayName = "SvgCartPlus";
SvgCartPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCartPlus;
