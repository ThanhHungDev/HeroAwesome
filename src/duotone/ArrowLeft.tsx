import * as React from "react";

const SvgArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M424 297H137.6L96 256l41.59-41H424c13.3 0 24 11 24 24.63v32.82A24.22 24.22 0 01424 297z"
      opacity={0.4}
    />
    <path
      d="M201.69 473.48l-.71-.71L7 273.44a25 25 0 010-34.78L201 39.23a23.38 23.38 0 0133.11-.7c.24.22.47.46.7.7L256.94 62a25.13 25.13 0 01-.4 35.18L95.81 256l160.73 158.8a24.94 24.94 0 01.4 35.18l-22.15 22.78a23.38 23.38 0 01-33.1.72z"
      className="arrow-left_svg__fa-primary"
    />
  </svg>
);

SvgArrowLeft.displayName = "SvgArrowLeft";
SvgArrowLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowLeft;
