import * as React from "react";

const SvgPhoneSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zM94 416a15 15 0 01-14.62-11.63l-15-65a15 15 0 018.7-17.16l70-30a15 15 0 0117.52 4.29l31 37.89a231.87 231.87 0 00110.79-110.78l-37.89-31a15 15 0 01-4.29-17.52l30-70a15 15 0 0117.16-8.7l65 15A15 15 0 01384 126c0 160.29-129.95 290-290 290z"
      opacity={0.4}
    />
    <path
      d="M73.09 322.21l70-30a15 15 0 0117.52 4.29l31 37.89a231.91 231.91 0 00110.78-110.78l-37.89-31a15 15 0 01-4.29-17.52l30-70a15 15 0 0117.16-8.7l65 15A15 15 0 01384 126c0 160.29-129.94 290-290 290a15 15 0 01-14.62-11.63l-15-65a15 15 0 018.71-17.16z"
      className="phone-square_svg__fa-primary"
    />
  </svg>
);

SvgPhoneSquare.displayName = "SvgPhoneSquare";
SvgPhoneSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneSquare;
