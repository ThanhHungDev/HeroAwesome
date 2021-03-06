import * as React from "react";

const SvgWheelchair = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M350.39 359.82a176 176 0 11-208.54-196.5c2.53 17.67 5.52 38.63 9.08 63.48A112 112 0 10288 336a114.79 114.79 0 00-1.13-16h44.81z"
      opacity={0.4}
    />
    <path
      d="M503.12 435.78l-65.46 32.88a32 32 0 01-42.89-14.43l-.3-.62L331.68 320H192a32 32 0 01-31.68-27.48C126.43 55.31 128.38 70 128 64a64 64 0 1173.37 63.31L206 160h130a16 16 0 0116 16v32a16 16 0 01-16 16H215.18l4.57 32H352a32 32 0 0129 18.39l57.48 122.41 36.18-18.35a16 16 0 0121.44 7.22l14.23 28.66a16 16 0 01-7.21 21.45z"
      className="wheelchair_svg__fa-primary"
    />
  </svg>
);

SvgWheelchair.displayName = "SvgWheelchair";
SvgWheelchair.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWheelchair;
