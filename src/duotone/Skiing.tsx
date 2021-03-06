import * as React from "react";

const SvgSkiing = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M432 96a48 48 0 10-48-48 48 48 0 0048 48zm73 356.1a23.9 23.9 0 00-33.9 0c-12.1 12.1-30.5 15.4-45.1 8.7L35 258.7a24 24 0 10-22 42.6l391.9 202.5a88.06 88.06 0 0037.1 8.1 89 89 0 0063-26 24 24 0 000-33.8zM120 91.6l-11.5 22.5a39.15 39.15 0 0042.8-4.8l216.28 109.75a47.52 47.52 0 01-16-22.65l-10.76-29-175.92-87A38.77 38.77 0 00144 44.8l-11.1 21.7h-.2l-34.4-7a5.11 5.11 0 00-5 1.7 5.23 5.23 0 00.5 7.4z"
      opacity={0.4}
    />
    <path
      d="M293 215.7l-107-53.1a63.8 63.8 0 0017.7 54.4l75.1 75.2-45.9 68.8 57.3 29.6 49.2-73.8a48 48 0 00-6-60.6zm169.3-20.3l-52.1-26.1-17.1-51.2c-8.1-24.2-40.9-56.6-84.5-39.2l-81.43 32.28 113.67 56.18 10.76 29a47.6 47.6 0 0024 27.7l58.1 29a32.2 32.2 0 0028.6-57.7z"
      className="skiing_svg__fa-primary"
    />
  </svg>
);

SvgSkiing.displayName = "SvgSkiing";
SvgSkiing.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkiing;
