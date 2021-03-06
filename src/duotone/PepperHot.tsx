import * as React from "react";

const SvgPepperHot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M0 456a56 56 0 0156-56c141.58 0 163.44-181.24 221.92-250.82l52.75 24.22v89.7h107.46l37.05 38.54C426.65 389.11 268.64 512 56 512a56 56 0 01-56-56z"
      opacity={0.4}
    />
    <path
      d="M362.67 152.86L288 118.57c22.34-14 48.34-22.59 76.34-22.59a142.91 142.91 0 0157.16 12c18.45-37.22 8.26-62 1.4-72.32a8.07 8.07 0 01.89-10.23l22.9-23a6.67 6.67 0 01.68-.62A8 8 0 01458.62 3c18.56 23.48 35.3 71.91 3.14 131.75A154 154 0 01512 248.67c0 13.68-2.3 26.69-5.56 39.31l-54.68-56.88h-89.09z"
      className="pepper-hot_svg__fa-primary"
    />
  </svg>
);

SvgPepperHot.displayName = "SvgPepperHot";
SvgPepperHot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPepperHot;
