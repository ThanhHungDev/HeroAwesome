import * as React from "react";

const SvgOilCan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M629.81 160.31L416 224l-50.49-25.24A64.2 64.2 0 00336.9 192H176L37.72 166.86A31.93 31.93 0 000 198.34v95a32 32 0 0026.28 31.48L96 337.46V384a32 32 0 0032 32h274.64a32 32 0 0022.76-9.51l212.26-214.75a8 8 0 002.34-5.66V168a8 8 0 00-10.19-7.69zM96 288.67l-48-8.73v-62.43l48 8.73z"
      opacity={0.4}
    />
    <path
      d="M592 288s-42.67 61.77-42.67 85.33a42.67 42.67 0 0085.34 0C634.67 349.76 592 288 592 288zM336 96H176a16 16 0 00-16 16v16a16 16 0 0016 16h56v48h48v-48h56a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      className="oil-can_svg__fa-primary"
    />
  </svg>
);

SvgOilCan.displayName = "SvgOilCan";
SvgOilCan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOilCan;
