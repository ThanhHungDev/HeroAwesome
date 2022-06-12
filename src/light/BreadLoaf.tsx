import * as React from "react";

const SvgBreadLoaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M400 32H240C107.45 32 0 103.63 0 192c0 35.35 30.86 64 64 64v192a32 32 0 0032 32h448a32 32 0 0032-32V256c33.14 0 64-28.65 64-64 0-88.37-107.45-160-240-160zm-16 416H96V224H64c-15.44 0-32-14.36-32-32 0-69.38 95.25-128 208-128s208 58.62 208 128c0 17.64-12.56 32-28 32h-36zm160 0H416V256h128zm36-224H471.68a66.61 66.61 0 008.32-32c0-52.43-38-98.82-96.44-128H400c112.75 0 208 58.62 208 128 0 17.64-12.56 32-28 32z" />
  </svg>
);

SvgBreadLoaf.displayName = "SvgBreadLoaf";
SvgBreadLoaf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBreadLoaf;