import * as React from "react";

const SvgRetweet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M10 202.66a24 24 0 010-33.94L110.72 68a24 24 0 0133.94 0l100.68 100.71a24 24 0 010 33.95l-10.82 10.82a24 24 0 01-34.42-.48l-40.41-42.8v182.11h187.54a24 24 0 0117 7l16 16c15.12 15.12 4.41 41-17 41H119.69a24 24 0 01-24-24V170.19L55.27 213a24 24 0 01-34.42.49z"
      opacity={0.4}
    />
    <path
      d="M259.17 137.28c-15.12-15.12-4.41-41 17-41h243.52a24 24 0 0124 24v222.15l40.41-42.79a24 24 0 0134.42-.49L629.34 310a24 24 0 010 33.94L528.66 444.6a24 24 0 01-33.94 0L394 343.91a24 24 0 010-33.91l10.82-10.82a24 24 0 0134.42.49l40.42 42.79V160.31H292.14a24 24 0 01-17-7z"
      className="retweet_svg__fa-primary"
    />
  </svg>
);

SvgRetweet.displayName = "SvgRetweet";
SvgRetweet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRetweet;
