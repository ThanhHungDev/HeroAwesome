import * as React from "react";

const SvgHeadVr = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509.2 275c-2.47-5.56-5.05-12-7.69-19H308.56a119.09 119.09 0 01-80.92-32H35a191.65 191.65 0 0061 110.82V512h224v-64h64a64 64 0 0064-64v-64h32a32 32 0 0029.2-45zM220.94 68.87A112.21 112.21 0 01304 32h72.3A207.36 207.36 0 00266.09 0H224C140.44 0 69.54 53.48 43.16 128h150a112.22 112.22 0 0127.78-59.13z"
      opacity={0.4}
    />
    <path
      d="M496 64h-48v160h48a16 16 0 0016-16V80a16 16 0 00-16-16zm-270.4 64H16a16 16 0 00-16 16v32a16 16 0 0016 16h224.84c15.81 19.71 41 32 67.72 32H416V64H304a80 80 0 00-78.4 64z"
      className="head-vr_svg__fa-primary"
    />
  </svg>
);

SvgHeadVr.displayName = "SvgHeadVr";
SvgHeadVr.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadVr;
