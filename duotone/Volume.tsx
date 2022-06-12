import * as React from "react";

const SvgVolume = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 512" {...props}>
    <path
      d="M256 88v336c0 21.44-25.94 32-41 17l-89-88.95H24A24 24 0 010 328V184a24 24 0 0124-24h102.06l89-88.95C230 56 256 66.56 256 88z"
      opacity={0.4}
    />
    <path
      d="M338.23 179.13a24 24 0 10-23.16 42.06 39.42 39.42 0 010 69.62 24 24 0 1023.16 42.06 87.43 87.43 0 000-153.74zm56-79.37a23.9 23.9 0 00-33.12 7.46 24.29 24.29 0 007.41 33.36 136.67 136.67 0 010 230.84 24.28 24.28 0 00-7.41 33.36 23.94 23.94 0 0033.12 7.46 185.19 185.19 0 000-312.48z"
      className="volume_svg__fa-primary"
    />
  </svg>
);

SvgVolume.displayName = "SvgVolume";
SvgVolume.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVolume;
