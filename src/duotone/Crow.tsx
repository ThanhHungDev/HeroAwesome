import * as React from "react";

const SvgCrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M447.27 487.67a12 12 0 01-7.17 15.38l-22.55 8.21a12 12 0 01-15.38-7.17l-44.65-120.17a192 192 0 0048.73-7.7zM312.87 384H261l45.22 120.1a12 12 0 0015.38 7.17l22.55-8.21a12 12 0 007.17-15.38zM640 96c0-35.35-43-64-96-64h-16a79.67 79.67 0 0116 48v32z"
      opacity={0.4}
    />
    <path
      d="M464 0a80 80 0 00-80 80v21L12.09 393.57a30.22 30.22 0 0031.64 51.2L165.27 384H352c106 0 192-86 192-192V80a80 80 0 00-80-80zm0 104a24 24 0 1124-24 24 24 0 01-24 24z"
      className="crow_svg__fa-primary"
    />
  </svg>
);

SvgCrow.displayName = "SvgCrow";
SvgCrow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCrow;
