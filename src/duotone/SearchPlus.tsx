import * as React from "react";

const SvgSearchPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M208 80a128 128 0 11-90.51 37.49A127.15 127.15 0 01208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
      opacity={0.4}
    />
    <path
      d="M292 180h-56v-56a12 12 0 00-12-12h-32a12 12 0 00-12 12v56h-56a12 12 0 00-12 12v32a12 12 0 0012 12h56v56a12 12 0 0012 12h32a12 12 0 0012-12v-56h56a12 12 0 0012-12v-32a12 12 0 00-12-12zm213 262.7L405.3 343a24 24 0 00-17-7H372l-36 36v16.3a24 24 0 007 17l99.7 99.7a23.9 23.9 0 0033.9 0l28.3-28.3a24.11 24.11 0 00.1-34z"
      className="search-plus_svg__fa-primary"
    />
  </svg>
);

SvgSearchPlus.displayName = "SvgSearchPlus";
SvgSearchPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSearchPlus;
