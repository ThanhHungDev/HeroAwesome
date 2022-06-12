import * as React from "react";

const SvgCoffeeTogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 64h-16l-23.16-46.31A32 32 0 00364.22 0H83.78a32 32 0 00-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v64c0 8.84 7.16 16 16 16h18.67l26.89 322.66C62.94 499.24 76.8 512 93.44 512h261.11c16.64 0 30.51-12.76 31.89-29.34L413.33 160H432c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zm-77.44 416H93.44l-5.33-64h271.78l-5.33 64zm8-96H85.44L74.78 256h298.45l-10.67 128zm13.33-160H72.11l-5.33-64h314.45l-5.34 64zM416 128H32V96h19.78l32-64h280.45l32 64H416v32z" />
  </svg>
);

SvgCoffeeTogo.displayName = "SvgCoffeeTogo";
SvgCoffeeTogo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffeeTogo;
