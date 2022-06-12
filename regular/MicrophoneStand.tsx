import * as React from "react";

const SvgMicrophoneStand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M476.37 35.63a121.69 121.69 0 00-172.07 0l-28.67 28.68a121.18 121.18 0 00-35.55 85.08L12 406.85a48 48 0 002 65.71l25.37 25.38a48 48 0 0065.72 2L232 387.21V496a16 16 0 0016 16h16a16 16 0 0016-16V344.83l82.6-72.92a121.23 121.23 0 0085.09-35.54l28.68-28.68a121.67 121.67 0 000-172.06zM73.38 464L48 438.62l213.15-240.56 52.79 52.78zm288.28-240a72.88 72.88 0 01-7.41-.72l-65.51-65.51a73.2 73.2 0 0118.46-56.62L410.86 204.8a73 73 0 01-49.2 19.2zm83.13-53.15L341.14 67.2a73.16 73.16 0 01101.28 2.37c27.83 27.82 28.44 72.43 2.37 101.28z" />
  </svg>
);

SvgMicrophoneStand.displayName = "SvgMicrophoneStand";
SvgMicrophoneStand.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrophoneStand;
