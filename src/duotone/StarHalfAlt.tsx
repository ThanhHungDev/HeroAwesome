import * as React from "react";

const SvgStarHalfAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 536 512" {...props}>
    <path
      d="M526.29 226.11l-106 103 25 145.49c3.64 20.77-13 37.4-31.66 37.4a31.75 31.75 0 01-14.84-3.71l-131-68.71v-54.24l22.39 11.73 102.22 53.59-19.5-113.45-4.29-24.88 18.14-17.62 82.73-80.38-114.41-16.63-25-3.64-11.26-22.63-51.06-103.29V0a31.92 31.92 0 0128.81 17.81L362 150.2l146.51 21.31c26.28 3.8 36.81 36.1 17.75 54.6z"
      opacity={0.4}
    />
    <path
      d="M90.48 474.5l25-145.5L9.7 226c-19-18.5-8.51-50.8 17.72-54.6l146.24-21.2L239 17.8A31.67 31.67 0 01267.75 0v439.6l-130.82 68.6c-23.42 12.3-50.93-7.6-46.45-33.7z"
      className="star-half-alt_svg__fa-primary"
    />
  </svg>
);

SvgStarHalfAlt.displayName = "SvgStarHalfAlt";
SvgStarHalfAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarHalfAlt;
