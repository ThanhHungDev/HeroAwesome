import * as React from "react";

const SvgSlidersV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M272 352h-24V16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v336h-24c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h24v80c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-80h24c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM112 96H88V16c0-8.8-7.2-16-16-16H56c-8.8 0-16 7.2-16 16v80H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h24v336c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V160h24c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm320 128h-24V16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v208h-24c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h24v208c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V288h24c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" />
  </svg>
);

SvgSlidersV.displayName = "SvgSlidersV";
SvgSlidersV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSlidersV;