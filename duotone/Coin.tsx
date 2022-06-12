import * as React from "react";

const SvgCoin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M0 208C0 128.44 114.67 64 256 64s256 64.44 256 144-114.67 144-256 144S0 287.56 0 208z"
      opacity={0.4}
    />
    <path
      d="M0 320c0 27.77 18 53.37 48 74.33V330c-18.85-12-35.4-25.36-48-40.38zm80 92.51c27.09 12.89 59.66 22.81 96 28.8V377c-35.39-6-67.81-15.88-96-29zM464 330v64.32c30.05-21 48-46.56 48-74.33v-30.36C499.4 304.65 482.85 318 464 330zM336 441.31c36.34-6 68.91-15.91 96-28.8V348c-28.19 13.12-60.61 23-96 29zM208 381.2v64.09c15.62 1.51 31.49 2.71 48 2.71s32.38-1.2 48-2.71V381.2a477.2 477.2 0 01-48 2.8 477.2 477.2 0 01-48-2.8z"
      className="coin_svg__fa-primary"
    />
  </svg>
);

SvgCoin.displayName = "SvgCoin";
SvgCoin.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoin;
