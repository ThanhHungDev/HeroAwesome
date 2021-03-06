import * as React from "react";

const SvgExpandArrows = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 200V64a32 32 0 0132-32h136a23.94 23.94 0 0124 24v15.3a24 24 0 01-24.7 24L101 93.4l123 123-39.6 39.6-123-123 1.9 66.3a24 24 0 01-24 24.7H24a23.94 23.94 0 01-24-24zm424 88h-15.3a24 24 0 00-24 24.7l1.9 66.3-123-123-39.6 39.6 123 123-66.3-1.9a24 24 0 00-24.7 24V456a23.94 23.94 0 0024 24h136a32 32 0 0032-32V312a23.94 23.94 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M101 418.6l66.3-1.9a24 24 0 0124.7 24V456a23.94 23.94 0 01-24 24H32a32 32 0 01-32-32V312a23.94 23.94 0 0124-24h15.3a24 24 0 0124 24.7L61.4 379 347 93.4l-66.3 1.9a24 24 0 01-24.7-24V56a23.94 23.94 0 0124-24h136a32 32 0 0132 32v136a23.94 23.94 0 01-24 24h-15.3a24 24 0 01-24-24.7l1.9-66.3z"
      className="expand-arrows_svg__fa-primary"
    />
  </svg>
);

SvgExpandArrows.displayName = "SvgExpandArrows";
SvgExpandArrows.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExpandArrows;
