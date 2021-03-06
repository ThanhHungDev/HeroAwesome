import * as React from "react";

const SvgThumbsUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M163.56 229.81c39.61-39.15 56.65-80.59 89.12-113.11 14.8-14.84 20.18-37.24 25.39-58.91C282.52 39.29 291.82 0 312 0c24 0 72 8 72 81.45 0 42.42-26 66.21-33.28 94.55h101.73c33.39 0 59.39 27.75 59.55 58.1.08 17.94-7.55 37.25-19.44 49.19l-.11.12c9.84 23.33 8.24 56-9.31 79.46 8.68 25.9-.07 57.71-16.38 74.76 4.3 17.6 2.24 32.58-6.15 44.63C440.2 511.59 389.62 512 346.84 512H344c-48.28 0-87.8-17.6-119.56-31.73-16-7.09-36.82-15.88-52.65-16.17a12 12 0 01-11.78-12V238.33a12 12 0 013.55-8.52z"
      opacity={0.4}
    />
    <path
      d="M104 224H24a24 24 0 00-24 24v240a24 24 0 0024 24h80a24 24 0 0024-24V248a24 24 0 00-24-24zM64 472a24 24 0 1124-24 24 24 0 01-24 24z"
      className="thumbs-up_svg__fa-primary"
    />
  </svg>
);

SvgThumbsUp.displayName = "SvgThumbsUp";
SvgThumbsUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThumbsUp;
