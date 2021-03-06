import * as React from "react";

const SvgDiploma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M608.64 63.56c-6.78-11.5-22-17.88-37-14.77l-127 42.78c-9.44 3.18-19 5.93-28.65 8.37v144.12L467 332l104.6 35.24c15 3.1 30.25-3.27 37-14.77 41.85-70.96 41.85-217.97.04-288.91zM68.39 48.78c-15-3.1-30.25 3.27-37 14.77-41.81 70.94-41.81 218 0 288.89 6.78 11.5 22 17.88 37 14.77L173 332l51-87.91V99.94c-9.64-2.45-19.21-5.19-28.65-8.37z"
      opacity={0.4}
    />
    <path
      d="M384 112v140.67l95.16 164A11.13 11.13 0 01468.43 432h-36.64l-25.2 28.52a11.13 11.13 0 01-18.39-3.45L320 336l-68.19 121.07a11.13 11.13 0 01-18.39 3.45L208.21 432h-36.64a11.13 11.13 0 01-10.73-15.32l95.16-164V112z"
      className="diploma_svg__fa-primary"
    />
  </svg>
);

SvgDiploma.displayName = "SvgDiploma";
SvgDiploma.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiploma;
