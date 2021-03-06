import * as React from "react";

const SvgRetweetAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M96 192H48c-21.36 0-32-25.9-17-41l80-80a24 24 0 0134 0l80 80c15.11 15.1 4.35 41-17 41h-48v160h202.08a18.9 18.9 0 0117.67 12.08 55.89 55.89 0 0012.68 19.52c11.95 11.95 3.49 32.4-13.43 32.4H120a24 24 0 01-24-24z"
      opacity={0.4}
    />
    <path
      d="M609 361l-80 80a24 24 0 01-33.94 0l-80-80c-15.11-15.11-4.34-41 17-41h48V160H278a18.91 18.91 0 01-17.68-12.08 55.72 55.72 0 00-12.67-19.52c-12-12-3.49-32.4 13.42-32.4H520a24 24 0 0124 24v200h48c21.39 0 32.06 25.9 17 41z"
      className="retweet-alt_svg__fa-primary"
    />
  </svg>
);

SvgRetweetAlt.displayName = "SvgRetweetAlt";
SvgRetweetAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRetweetAlt;
