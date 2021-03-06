import * as React from "react";

const SvgCamcorder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M336.2 160H96v-32a32 32 0 0132-32h176a16 16 0 0016-16V48a16 16 0 00-16-16H128a96 96 0 00-96 96v34.89A47.66 47.66 0 000 207.8v224.4A47.81 47.81 0 0047.8 480h288.4a47.81 47.81 0 0047.8-47.8V207.8a47.81 47.81 0 00-47.8-47.8zM320 249.6a6.41 6.41 0 01-6.4 6.4H70.4a6.41 6.41 0 01-6.4-6.4v-19.2a6.41 6.41 0 016.4-6.4h243.2a6.41 6.41 0 016.4 6.4z"
      opacity={0.4}
    />
    <path
      d="M525.59 165.7L416 241.3v157.4l109.59 75.5c21.21 14.6 50.41-.29 50.41-25.79V191.5c0-25.41-29.09-40.41-50.41-25.8zM313.6 224H70.4a6.41 6.41 0 00-6.4 6.4v19.2a6.41 6.41 0 006.4 6.4h243.2a6.41 6.41 0 006.4-6.4v-19.2a6.41 6.41 0 00-6.4-6.4z"
      className="camcorder_svg__fa-primary"
    />
  </svg>
);

SvgCamcorder.displayName = "SvgCamcorder";
SvgCamcorder.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCamcorder;
