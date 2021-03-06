import * as React from "react";

const SvgCricket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M421.48 321.52L158 506c-8.9 6.2-20.5 7.9-30.4 3.5A216.24 216.24 0 01.08 327.42c-.8-10.8 4.8-21.2 13.7-27.4l263.5-184.5-30.9 175.1z"
      opacity={0.4}
    />
    <path
      d="M496 352a80 80 0 1080 80 80 80 0 00-80-80zM635.7 30.4l-15.2-20.2A24.14 24.14 0 00587 4.32l-144 100.5a32.07 32.07 0 01-44.6-7.9l-21.9-31.3a16 16 0 00-22.3-3.9l-21.3 14.9-30.9 175.1 175.1 30.9 21.3-14.9a16 16 0 003.9-22.3l-24.5-35a32.07 32.07 0 017.9-44.6l144.1-101.9a24.14 24.14 0 005.88-33.5z"
      className="cricket_svg__fa-primary"
    />
  </svg>
);

SvgCricket.displayName = "SvgCricket";
SvgCricket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCricket;
