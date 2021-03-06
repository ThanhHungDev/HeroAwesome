import * as React from "react";

const SvgSunDust = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M160 256a95.68 95.68 0 0028.1 67.8l135.7-135.7A96 96 0 00160 256zM419.3 70.8l-100.4 33.5-47.4-94.7a17.31 17.31 0 00-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 000 31l94.7 47.3-33.5 100.5A16.86 16.86 0 0075 437l90.5-90.5a128 128 0 01181-181L437 75a16.86 16.86 0 00-17.7-4.2z"
      opacity={0.4}
    />
    <path
      d="M160 448a32 32 0 1032 32 32 32 0 00-32-32zm320-256a32 32 0 10-32-32 32 32 0 0032 32zm-96 96a32 32 0 10-32 32 32 32 0 0032-32zm-144 64a32 32 0 1032 32 32 32 0 00-32-32zm160 0a32 32 0 1032 32 32 32 0 00-32-32zm80 96a32 32 0 1032 32 32 32 0 00-32-32zm0-192a32 32 0 1032 32 32 32 0 00-32-32zM320 448a32 32 0 1032 32 32 32 0 00-32-32z"
      className="sun-dust_svg__fa-primary"
    />
  </svg>
);

SvgSunDust.displayName = "SvgSunDust";
SvgSunDust.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSunDust;
