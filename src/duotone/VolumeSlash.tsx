import * as React from "react";

const SvgVolumeSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M393.11 107.22a23.9 23.9 0 0133.12-7.46A185.33 185.33 0 01488.74 346l-38.65-29.9a136.7 136.7 0 00-49.57-175.52 24.29 24.29 0 01-7.41-33.36zm60.68-46.79a233.7 233.7 0 0173 315l38.52 29.78A282.1 282.1 0 00480.35 20a24.2 24.2 0 10-26.56 40.46zM347.07 221.19a40 40 0 0120.75 31.32l42.92 33.18A86.79 86.79 0 00416 256a87.89 87.89 0 00-45.78-76.86 24 24 0 10-23.16 42.06zM288 190.82V88c0-21.46-26-32-41-17l-49.7 49.69zM32 184v144a24 24 0 0024 24h102.06L247 441c15 15 41 4.47 41-17v-71.4L43.76 163.84C36.86 168.05 32 175.32 32 184z"
      opacity={0.4}
    />
    <path
      d="M594.54 508.63L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45L617 505.82a16 16 0 01-22.46 2.81z"
      className="volume-slash_svg__fa-primary"
    />
  </svg>
);

SvgVolumeSlash.displayName = "SvgVolumeSlash";
SvgVolumeSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVolumeSlash;
