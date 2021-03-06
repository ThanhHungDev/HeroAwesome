import * as React from "react";

const SvgPhoneSquareAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16.38 307.37l-15 65A15 15 0 01354 416C194 416 64 286.29 64 126a15 15 0 0111.63-14.61l65-15a15 15 0 0117.16 8.7l30 70a15 15 0 01-4.29 17.52l-37.89 31A231.94 231.94 0 00256.4 334.39l31-37.89a15 15 0 0117.52-4.29l70 30a15 15 0 018.7 17.16z"
      opacity={0.4}
    />
    <path
      d="M383.62 339.37l-15 65A15 15 0 01354 416C193.94 416 64 286.29 64 126a15 15 0 0111.63-14.61l65-15a15 15 0 0117.16 8.7l30 70a15 15 0 01-4.29 17.52l-37.89 31a231.92 231.92 0 00110.78 110.78l31-37.89a15 15 0 0117.52-4.29l70 30a15 15 0 018.71 17.16z"
      className="phone-square-alt_svg__fa-primary"
    />
  </svg>
);

SvgPhoneSquareAlt.displayName = "SvgPhoneSquareAlt";
SvgPhoneSquareAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneSquareAlt;
