import * as React from "react";

const SvgWatchCalculator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M320 80H64a64 64 0 00-64 64v224a64 64 0 0064 64h256a64 64 0 0064-64V144a64 64 0 00-64-64zM120 368a8 8 0 01-8 8H80a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm0-96a8 8 0 01-8 8H80a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm96 96a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm0-96a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm96 96a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm0-96a8 8 0 01-8 8h-32a8 8 0 01-8-8v-32a8 8 0 018-8h32a8 8 0 018 8zm0-96a8 8 0 01-8 8H80a8 8 0 01-8-8v-32a8 8 0 018-8h224a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M64 480a32 32 0 0032 32h192a32 32 0 0032-32v-48H64zM288 0H96a32 32 0 00-32 32v48h256V32a32 32 0 00-32-32zM72 368a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8H80a8 8 0 00-8 8zm8-88h32a8 8 0 008-8v-32a8 8 0 00-8-8H80a8 8 0 00-8 8v32a8 8 0 008 8zm88 88a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 00-8 8zm8-88h32a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 00-8 8v32a8 8 0 008 8zm88 88a8 8 0 008 8h32a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 00-8 8zm8-88h32a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 00-8 8v32a8 8 0 008 8z"
      className="watch-calculator_svg__fa-primary"
    />
  </svg>
);

SvgWatchCalculator.displayName = "SvgWatchCalculator";
SvgWatchCalculator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWatchCalculator;
