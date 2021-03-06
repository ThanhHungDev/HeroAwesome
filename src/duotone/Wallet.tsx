import * as React from "react";

const SvgWallet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M416 272a32 32 0 1032 32 32 32 0 00-32-32zm16-240H64A64 64 0 000 96a32 32 0 0032 32h48a16 16 0 010-32h384a16 16 0 0016-16 48 48 0 00-48-48z"
      opacity={0.4}
    />
    <path
      d="M461.2 128H32A32 32 0 010 96v320a64 64 0 0064 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1132-32 32 32 0 01-32 32z"
      className="wallet_svg__fa-primary"
    />
  </svg>
);

SvgWallet.displayName = "SvgWallet";
SvgWallet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWallet;
