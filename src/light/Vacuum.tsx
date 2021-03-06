import * as React from "react";

const SvgVacuum = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M352 400a16 16 0 1016 16 16 16 0 00-16-16zm288-288A112.14 112.14 0 00528 0H302.16A112.4 112.4 0 00192.5 89.31L124.91 416H80a80 80 0 00-80 80 16 16 0 0016 16h192a16 16 0 0016-16v-64a16 16 0 00-16-16h-50.43l66.24-320.22A80.33 80.33 0 01302.16 32H528a80 80 0 010 160h-33.18A191.28 191.28 0 00352 128a32 32 0 00-32 32v165.9c-37.17 13.25-64 48.44-64 90.1a96.1 96.1 0 0096 96h128a64 64 0 0064-64V320a190.78 190.78 0 00-25.9-96h9.9a112.14 112.14 0 00112-112zM192 448v32H34.74A48.1 48.1 0 0180 448zm160 32a64 64 0 1164-64 64.07 64.07 0 01-64 64zm160-32a32 32 0 01-32 32h-57a95.58 95.58 0 00-71-160V160c88.22 0 160 71.78 160 160z" />
  </svg>
);

SvgVacuum.displayName = "SvgVacuum";
SvgVacuum.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVacuum;
