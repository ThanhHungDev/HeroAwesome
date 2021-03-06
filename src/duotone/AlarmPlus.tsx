import * as React from "react";

const SvgAlarmPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M435.25 422A222.7 222.7 0 00480 288c0-123.71-100.3-224-224-224S32 164.29 32 288a222.7 222.7 0 0044.79 134l-40.1 40.09a16 16 0 000 22.63l22.62 22.62a16 16 0 0022.63 0L122 467.22a222.82 222.82 0 00268 0l40.1 40.09a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63zM368 296a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72h-72a16 16 0 01-16-16v-16a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M352 264h-72v-72a16 16 0 00-16-16h-16a16 16 0 00-16 16v72h-72a16 16 0 00-16 16v16a16 16 0 0016 16h72v72a16 16 0 0016 16h16a16 16 0 0016-16v-72h72a16 16 0 0016-16v-16a16 16 0 00-16-16zM96 0A96 96 0 000 96a94.81 94.81 0 0015.3 51.26L161.2 25.68A95.61 95.61 0 0096 0zm320 0a95.68 95.68 0 00-65.18 25.66l145.9 121.57A94.93 94.93 0 00512 96a96 96 0 00-96-96z"
      className="alarm-plus_svg__fa-primary"
    />
  </svg>
);

SvgAlarmPlus.displayName = "SvgAlarmPlus";
SvgAlarmPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlarmPlus;
