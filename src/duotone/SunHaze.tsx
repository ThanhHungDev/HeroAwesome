import * as React from "react";

const SvgSunHaze = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M471.7 193.1l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.7a17.31 17.31 0 00-31 0l-47.3 94.7-100.5-33.5c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4L74.6 240h119c3.4-27.2 15-53.6 35.9-74.5a128.13 128.13 0 01181 0c20.9 20.9 32.5 47.3 35.9 74.5h119zM320 160c-47.5 0-86.7 34.7-94.4 80h188.8c-7.7-45.3-46.9-80-94.4-80z"
      opacity={0.4}
    />
    <path
      d="M80 336h336a16 16 0 0016-16v-16a16 16 0 00-16-16H80a16 16 0 00-16 16v16a16 16 0 0016 16zm544-48H496a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16zM208 464H80a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16zm416 0H288a16 16 0 00-16 16v16a16 16 0 0016 16h336a16 16 0 0016-16v-16a16 16 0 00-16-16zm-48-56v-16a16 16 0 00-16-16H16a16 16 0 00-16 16v16a16 16 0 0016 16h544a16 16 0 0016-16z"
      className="sun-haze_svg__fa-primary"
    />
  </svg>
);

SvgSunHaze.displayName = "SvgSunHaze";
SvgSunHaze.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSunHaze;
