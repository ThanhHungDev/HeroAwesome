import * as React from "react";

const SvgFaucet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M352 256h-38.61c-15.71-13.44-35.46-23.07-57.39-28v-47.56l-32-3.38-32 3.38V228c-21.93 5-41.68 14.6-57.39 28H16a16 16 0 00-16 16v96a16 16 0 0016 16h92.79C129.38 421.73 173 448 224 448s94.62-26.27 115.21-64H352a32 32 0 0132 32 32 32 0 0032 32h64a32 32 0 0032-32 160 160 0 00-160-160zm-96-148.26V80a16 16 0 00-16-16h-32a16 16 0 00-16 16v27.74l32 3.38z"
      opacity={0.4}
    />
    <path
      d="M384 112.89v30.22c0 10-8.17 17.8-17.59 16.8L224 144.88l-142.41 15c-9.42 1-17.59-6.81-17.59-16.8v-30.19c0-10 8.17-17.8 17.59-16.8l142.41 15 142.41-15c9.42-1 17.59 6.81 17.59 16.8z"
      className="faucet_svg__fa-primary"
    />
  </svg>
);

SvgFaucet.displayName = "SvgFaucet";
SvgFaucet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFaucet;
