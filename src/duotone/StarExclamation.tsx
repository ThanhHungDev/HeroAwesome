import * as React from "react";

const SvgStarExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M528.55 171.5l-146.37-21.3-65.43-132.39c-11.72-23.7-45.68-23.8-57.5 0L193.82 150.2 47.45 171.4c-26.25 3.8-36.77 36.1-17.73 54.6l105.9 103-25.05 145.46c-4.51 26.1 23 46 46.49 33.7L288 439.57l130.94 68.69c23.35 12.3 51-7.5 46.49-33.7l-25.05-145.48 105.9-103c19-18.48 8.52-50.78-17.73-54.58zM288 392a40 40 0 1140.07-40A40 40 0 01288 392zm40.17-223.38l-8 112a8 8 0 01-8 7.4h-48.11a8 8 0 01-8-7.4l-8-112a8 8 0 017.39-8.58h64.74a8 8 0 018 8v.63z"
      opacity={0.4}
    />
    <path
      d="M288 312a40 40 0 1040.07 40A40 40 0 00288 312zm32.16-152H256a8 8 0 00-8 8v.62l8 112a8 8 0 008 7.4h48.09a8 8 0 008-7.4l8-112a8 8 0 00-7.39-8.58z"
      className="star-exclamation_svg__fa-primary"
    />
  </svg>
);

SvgStarExclamation.displayName = "SvgStarExclamation";
SvgStarExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarExclamation;
