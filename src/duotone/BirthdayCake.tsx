import * as React from "react";

const SvgBirthdayCake = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M373.5 384c-28 0-31.39 32-74.75 32-43.55 0-46.6-32-74.75-32-27.28 0-31.66 32-74.5 32-43.5 0-46.8-32-74.75-32S43.36 416 0 416v96h448v-96c-43.25 0-47-32-74.5-32zM96 96c17.75 0 32-13.5 32-40S108 0 96 0c0 41-32 33-32 64a31.9 31.9 0 0032 32zm128 0c17.75 0 32-13.5 32-40S236 0 224 0c0 41-32 33-32 64a31.9 31.9 0 0032 32zm128 0c17.75 0 32-13.5 32-40S364 0 352 0c0 41-32 33-32 64a31.9 31.9 0 0032 32z"
      opacity={0.4}
    />
    <path
      d="M448 384c-28 0-31.26-32-74.5-32-43.43 0-46.83 32-74.75 32-27.7 0-31.45-32-74.75-32-42.84 0-47.22 32-74.5 32-28.15 0-31.2-32-74.75-32S28.1 384 0 384v-80a48 48 0 0148-48h16V112h64v144h64V112h64v144h64V112h64v144h16a48 48 0 0148 48z"
      className="birthday-cake_svg__fa-primary"
    />
  </svg>
);

SvgBirthdayCake.displayName = "SvgBirthdayCake";
SvgBirthdayCake.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBirthdayCake;
