import * as React from "react";

const SvgTaxi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M352 64a32 32 0 00-32-32H192a32 32 0 00-32 32v32h192zM96 368H64a32 32 0 00-32 32v48a32 32 0 0032 32h32a32 32 0 0032-32v-48a32 32 0 00-32-32zm352 0h-32a32 32 0 00-32 32v48a32 32 0 0032 32h32a32 32 0 0032-32v-48a32 32 0 00-32-32zm-69.94-195.14c-2-7.38-9.38-12.86-14.85-12.86h-214.4c-5.47 0-12.83 5.48-15.06 13.64L116.55 240h278.9z"
      opacity={0.4}
    />
    <path
      d="M462 241.55l-22-84.75c-9.6-35.2-41.6-60.8-76.8-60.8H148.8c-35.2 0-67.2 25.6-76.8 60.8l-22 84.75A64 64 0 000 304v48a64 64 0 0064 64h384a64 64 0 0064-64v-48a64 64 0 00-50-62.45zm-328.25-67.91c2.25-8.16 9.59-13.64 15.06-13.64h214.4c5.47 0 12.83 5.48 14.85 12.86L395.45 240h-278.9zM96 352a32 32 0 1132-32 32 32 0 01-32 32zm320 0a32 32 0 1132-32 32 32 0 01-32 32z"
      className="taxi_svg__fa-primary"
    />
  </svg>
);

SvgTaxi.displayName = "SvgTaxi";
SvgTaxi.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTaxi;
