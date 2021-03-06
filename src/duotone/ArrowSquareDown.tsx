import * as React from "react";

const SvgArrowSquareDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-26.4 239.6L240.9 404.3a23.9 23.9 0 01-33.9 0L74.4 271.6a23.9 23.9 0 010-33.9l10.9-11a24 24 0 0134.3.4l72.4 75.5V120a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v182.6l72.4-75.5a24 24 0 0134.3-.4l10.9 11a23.9 23.9 0 010 33.9z"
      opacity={0.4}
    />
    <path
      d="M328.4 227.1a24 24 0 0134.3-.4l10.9 11a23.9 23.9 0 010 33.9L240.9 404.3a23.9 23.9 0 01-33.9 0L74.4 271.6a23.9 23.9 0 010-33.9l10.9-11a24 24 0 0134.3.4l72.4 75.5V120a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v182.6l72.4-75.5z"
      className="arrow-square-down_svg__fa-primary"
    />
  </svg>
);

SvgArrowSquareDown.displayName = "SvgArrowSquareDown";
SvgArrowSquareDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowSquareDown;
