import * as React from "react";

const SvgAlarmPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M96 0A96 96 0 000 96a94.81 94.81 0 0015.3 51.26L161.2 25.68A95.63 95.63 0 0096 0zm320 0a95.66 95.66 0 00-65.18 25.66l145.89 121.57A94.85 94.85 0 00512 96a96 96 0 00-96-96zM256 64C132.3 64 32 164.29 32 288a222.7 222.7 0 0044.79 134l-40.1 40.09a16 16 0 000 22.63l22.62 22.62a16 16 0 0022.63 0L122 467.22a222.82 222.82 0 00268 0l40.1 40.09a16 16 0 0022.62 0l22.63-22.62a16 16 0 000-22.63L435.25 422A222.69 222.69 0 00480 288c0-123.71-100.26-224-224-224zm112 232a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72h-72a16 16 0 01-16-16v-16a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16z" />
  </svg>
);

SvgAlarmPlus.displayName = "SvgAlarmPlus";
SvgAlarmPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlarmPlus;