import * as React from "react";

const SvgBurrito = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M351.83 224c-15.22 0-30 2.53-44.54 6.32C278.33 310.45 201.65 368 111.57 368A207 207 0 01.72 335.76c-3.72 33.8 6.86 68.88 32.74 94.74L81 478a116.21 116.21 0 00164.22 0l216-215.73A175.25 175.25 0 00351.83 224zm-64.07-64a174.85 174.85 0 00-38.33-109.28l-216 215.73A115.42 115.42 0 009 302.83 175.23 175.23 0 00111.57 336c97.14 0 176.19-78.95 176.19-176z"
      opacity={0.4}
    />
    <path
      d="M505.26 153.88A80 80 0 01512 186c0 22-9.37 42-24.29 56.75A207.26 207.26 0 00351.83 192a210 210 0 00-35.22 3A204.24 204.24 0 00269 24.26C283.8 9.37 303.74 0 325.8 0A80 80 0 01358 6.73a74.19 74.19 0 01101.69 45.53A74.13 74.13 0 01512 123a73.17 73.17 0 01-6.74 30.88z"
      className="burrito_svg__fa-primary"
    />
  </svg>
);

SvgBurrito.displayName = "SvgBurrito";
SvgBurrito.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBurrito;
