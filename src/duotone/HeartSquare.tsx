import * as React from "react";

const SvgHeartSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-52.5 248.3L236.9 394.5a17.88 17.88 0 01-25.9 0L100.5 280.3c-32.1-33.2-30.2-88.2 5.7-118.8 31.3-26.7 77.9-21.9 106.6 7.7l11.3 11.6 11.3-11.6c28.7-29.6 75.3-34.4 106.6-7.7 35.8 30.6 37.7 85.6 5.5 118.8z"
      opacity={0.4}
    />
    <path
      d="M106.2 161.5c31.3-26.7 77.9-21.9 106.6 7.7l11.3 11.6 11.3-11.6c28.7-29.6 75.3-34.4 106.6-7.7 35.8 30.6 37.7 85.6 5.5 118.8L236.9 394.5a17.88 17.88 0 01-25.9 0L100.5 280.3c-32.1-33.2-30.2-88.2 5.7-118.8z"
      className="heart-square_svg__fa-primary"
    />
  </svg>
);

SvgHeartSquare.displayName = "SvgHeartSquare";
SvgHeartSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeartSquare;
