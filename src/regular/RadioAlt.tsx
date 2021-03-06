import * as React from "react";

const SvgRadioAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M209 368h-64a16 16 0 00-16 16v16a16 16 0 0016 16h64a16 16 0 0016-16v-16a16 16 0 00-16-16zm144 56a72 72 0 10-72-72 72.09 72.09 0 0072 72zm96-296H212.5l288.83-81.21a16 16 0 0011.07-19.74l-4.33-15.38A16 16 0 00488.33.6L47.68 124.5A64 64 0 001 186.11V448a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zm16 320a16 16 0 01-16 16H65a16 16 0 01-16-16V256h416zM113 336h128a16 16 0 0016-16v-16a16 16 0 00-16-16H113a16 16 0 00-16 16v16a16 16 0 0016 16z" />
  </svg>
);

SvgRadioAlt.displayName = "SvgRadioAlt";
SvgRadioAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadioAlt;
