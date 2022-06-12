import * as React from "react";

const SvgPi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M128 286.46a169.35 169.35 0 01-36.62 105.62c-7.27 9.18-5.71 22.57 2.56 30.85L128.05 457c10.25 10.29 26.95 9 36.12-2.24A264.57 264.57 0 00224 286.46V144h-96zm375 79.79l-37.46-30A24 24 0 00431.8 340L414 361.67a16.84 16.84 0 01-30-10.51V144h-96v202.58c0 55 37.32 105.36 91.32 115.42 42.26 7.87 83.62-7.87 109.62-40.34l17.8-21.66a24 24 0 00-3.74-33.75z"
      opacity={0.4}
    />
    <path
      d="M512 72v48a24 24 0 01-24 24H16c-14.22 0-21.36-17.23-11.28-27.31l49.94-49.95A64 64 0 0199.91 48H488a24 24 0 0124 24z"
      className="pi_svg__fa-primary"
    />
  </svg>
);

SvgPi.displayName = "SvgPi";
SvgPi.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPi;
