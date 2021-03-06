import * as React from "react";

const SvgMicrophoneStand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M289.54 60.53c-23.85 23.84-34.57 55.55-33 86.77l108.15 108.14c31.22 1.58 62.94-9.14 86.78-33l2.19-2.18L291.72 58.34zM6.74 423.18a26.67 26.67 0 001.07 36.57l44.38 44.37a26.74 26.74 0 0036.63 1.14L224 385.93V496a16 16 0 0016 16h32a16 16 0 0016-16V329.44L344 280 232 168zM478.46 33.54a114.49 114.49 0 00-161.93 0l-2.19 2.18 161.94 161.93 2.18-2.18a114.49 114.49 0 000-161.93z" />
  </svg>
);

SvgMicrophoneStand.displayName = "SvgMicrophoneStand";
SvgMicrophoneStand.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrophoneStand;
