import * as React from "react";

const SvgFlowerDaffodil = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M511.93 336.84C501.94 435 405.57 512 288.17 512h-64.34C106.43 512 10.06 435 .07 336.84-.87 327.72 6.94 320 16.13 320h47.26c63 0 119.82 22.23 160.61 57.92v-96.58A80.33 80.33 0 00256 256a80.33 80.33 0 0032 25.34v96.58C328.79 342.23 385.61 320 448.61 320h47.26c9.19 0 16.98 7.72 16.06 16.84z"
      opacity={0.4}
    />
    <path
      d="M368 144A80 80 0 10256 32a80 80 0 10-112 112 80 80 0 10112 112 80 80 0 10112-112zm-112 48a48 48 0 1148-48 48 48 0 01-48 48z"
      className="flower-daffodil_svg__fa-primary"
    />
  </svg>
);

SvgFlowerDaffodil.displayName = "SvgFlowerDaffodil";
SvgFlowerDaffodil.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlowerDaffodil;
