import * as React from "react";

const SvgBoothCurtain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M0 32v472c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V32h64v352c0 35.3 28.7 64 64 64 19.2 0 36.3-8.7 48-22.1 11.7 13.4 28.8 22.1 48 22.1s36.3-8.7 48-22.1c11.7 13.4 28.8 22.1 48 22.1s36.3-8.7 48-22.1c11.7 13.4 28.8 22.1 48 22.1 11.7 0 22.5-3.4 32-8.9V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32zm416 0h64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm-96 0h64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm-96 0h64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm-96 0h64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V32z" />
  </svg>
);

SvgBoothCurtain.displayName = "SvgBoothCurtain";
SvgBoothCurtain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoothCurtain;
