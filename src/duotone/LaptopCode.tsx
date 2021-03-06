import * as React from "react";

const SvgLaptopCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M528 0H112a48.14 48.14 0 00-48 48v336h512V48a48.14 48.14 0 00-48-48zm-16 320H128V64h384z"
      opacity={0.4}
    />
    <path
      d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 00-16 16v16a64.19 64.19 0 0064 64h512a64.19 64.19 0 0064-64v-16a16 16 0 00-16-16zM512 64H128v256h384zM289 250.34l-11.31 11.31a16 16 0 01-22.63 0l-58.35-58.34a16 16 0 010-22.63L255 122.34a16 16 0 0122.63 0L289 133.65a16 16 0 010 22.63L253.25 192 289 227.71a16 16 0 010 22.63zm154.35-47L385 261.66a16 16 0 01-22.63 0L351 250.35a16 16 0 010-22.63L386.75 192 351 156.29a16 16 0 010-22.63l11.31-11.31a16 16 0 0122.63 0l58.34 58.34a16 16 0 01.04 22.63z"
      className="laptop-code_svg__fa-primary"
    />
  </svg>
);

SvgLaptopCode.displayName = "SvgLaptopCode";
SvgLaptopCode.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLaptopCode;
