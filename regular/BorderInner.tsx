import * as React from "react";

const SvgBorderInner = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 232H248V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v184H16a16 16 0 00-16 16v16a16 16 0 0016 16h184v184a16 16 0 0016 16h16a16 16 0 0016-16V280h184a16 16 0 0016-16v-16a16 16 0 00-16-16zM40 424H16a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16zM16 184h24a16 16 0 0016-16v-24a16 16 0 00-16-16H16a16 16 0 00-16 16v24a16 16 0 0016 16zm24 144H16a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16zm72-240h24a16 16 0 0016-16V48a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm-96 0h24a16 16 0 0016-16V48a16 16 0 00-16-16H16A16 16 0 000 48v24a16 16 0 0016 16zm296 0h24a16 16 0 0016-16V48a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm120 240h-24a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16zm-296 96h-24a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16zM432 32h-24a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16V48a16 16 0 00-16-16zm0 96h-24a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16zm-96 296h-24a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16zm96 0h-24a16 16 0 00-16 16v24a16 16 0 0016 16h24a16 16 0 0016-16v-24a16 16 0 00-16-16z" />
  </svg>
);

SvgBorderInner.displayName = "SvgBorderInner";
SvgBorderInner.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderInner;
