import * as React from "react";

const SvgMugHot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M139.3 67.3a94.83 94.83 0 01-26.4-53.5A16.11 16.11 0 0096.8 0H80.4a16.31 16.31 0 00-16.3 18 145.36 145.36 0 0040.6 84.4 81.22 81.22 0 0122.4 44.1 16.23 16.23 0 0016 13.5h16.5c9.8 0 17.6-8.5 16.3-18a130.72 130.72 0 00-36.6-74.7zM287.9 142a130.72 130.72 0 00-36.6-74.7 94.83 94.83 0 01-26.4-53.5A16.11 16.11 0 00208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18a145.36 145.36 0 0040.6 84.4 81.22 81.22 0 0122.4 44.1 16.23 16.23 0 0016 13.5h16.5c9.8 0 17.6-8.5 16.3-18z"
      opacity={0.4}
    />
    <path
      d="M400 192H32a32 32 0 00-32 32v192a96 96 0 0096 96h192a96 96 0 0096-96h16a112 112 0 000-224zm0 160h-16v-96h16a48 48 0 010 96z"
      className="mug-hot_svg__fa-primary"
    />
  </svg>
);

SvgMugHot.displayName = "SvgMugHot";
SvgMugHot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMugHot;
