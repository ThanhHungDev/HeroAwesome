import * as React from "react";

const SvgTimesOctagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M497.9 150.5L361.4 14.1A48 48 0 00327.5 0H184.4a48 48 0 00-33.9 14.1L14.1 150.6A48 48 0 000 184.5v143.1a48 48 0 0014.1 33.9l136.5 136.4a48 48 0 0033.9 14.1h143.1a48 48 0 0033.9-14.1l136.4-136.5a48 48 0 0014.1-33.9V184.4a48 48 0 00-14.1-33.9zM377.6 321a12 12 0 010 17l-39.4 39.8a12 12 0 01-17 0l-65.1-65.1-65.1 65.1a12 12 0 01-17 0l-39.6-39.6a12 12 0 010-17l65.1-65.1-65.1-65.1a12 12 0 010-17l39.5-39.7a12 12 0 0117 0l65.1 65.1 65-65a12 12 0 0117 0l39.7 39.5a12 12 0 010 17L312.6 256z"
      opacity={0.4}
    />
    <path
      d="M134.4 191a12 12 0 010-17l39.5-39.7a12 12 0 0117 0l65.1 65.1 65-65a12 12 0 0117 0l39.7 39.5a12 12 0 010 17L312.6 256l65 65a12 12 0 010 17l-39.4 39.8a12 12 0 01-17 0l-65.1-65.1-65.1 65.1a12 12 0 01-17 0l-39.6-39.6a12 12 0 010-17l65.1-65.1z"
      className="times-octagon_svg__fa-primary"
    />
  </svg>
);

SvgTimesOctagon.displayName = "SvgTimesOctagon";
SvgTimesOctagon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTimesOctagon;
