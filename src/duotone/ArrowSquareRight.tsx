import * as React from "react";

const SvgArrowSquareRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-27.7 241L239.6 405.6a23.9 23.9 0 01-33.9 0l-11-10.9a24 24 0 01.4-34.3l75.5-72.4H88a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h182.6l-75.5-72.4a24.15 24.15 0 01-.4-34.4l11-10.9a23.9 23.9 0 0133.9 0l132.7 132.8a23.9 23.9 0 010 33.9z"
      opacity={0.4}
    />
    <path
      d="M194.7 117.2l11-10.9a23.9 23.9 0 0133.9 0l132.7 132.8a23.9 23.9 0 010 33.9L239.6 405.6a23.9 23.9 0 01-33.9 0l-11-10.9a24 24 0 01.4-34.3l75.5-72.4H88a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h182.6l-75.5-72.4a24.15 24.15 0 01-.4-34.4z"
      className="arrow-square-right_svg__fa-primary"
    />
  </svg>
);

SvgArrowSquareRight.displayName = "SvgArrowSquareRight";
SvgArrowSquareRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowSquareRight;
