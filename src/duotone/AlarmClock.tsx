import * as React from "react";

const SvgAlarmClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M474.49 462.06L434.55 422a223.25 223.25 0 0044.61-134c0-123.71-99.9-224-223.14-224S32.88 164.29 32.88 288a223.25 223.25 0 0044.61 134l-39.95 40.06a16.05 16.05 0 000 22.63l22.54 22.62a15.9 15.9 0 0022.47.07l.07-.07 39.94-40.09a221.26 221.26 0 00266.92 0l39.94 40.09a15.9 15.9 0 0022.47.07l.07-.07 22.53-22.62a16 16 0 000-22.63zM346 355.51l-20 25a16 16 0 01-22.49 2.5L239 331.39a40 40 0 01-15-31.23V176a16 16 0 0116-16h32a16 16 0 0116 16v112.62L343.5 333a16 16 0 012.5 22.51z"
      opacity={0.4}
    />
    <path
      d="M1 96a95.08 95.08 0 0015.24 51.26L161.57 25.68A95 95 0 0096.62 0C43.83 0 1 43 1 96zm342.5 237L288 288.62V176a16 16 0 00-16-16h-32a16 16 0 00-16 16v124.16a40 40 0 0015 31.23L303.51 383a16 16 0 0022.49-2.5l20-25a16 16 0 00-2.5-22.5zM415.38 0a95.08 95.08 0 00-64.93 25.66l145.33 121.57A95.13 95.13 0 00511 96c0-53-42.83-96-95.62-96z"
      className="alarm-clock_svg__fa-primary"
    />
  </svg>
);

SvgAlarmClock.displayName = "SvgAlarmClock";
SvgAlarmClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlarmClock;
