import * as React from "react";

const SvgKiss = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 232a32 32 0 1132-32 32 32 0 01-32 32zm136 156c0 19.2-28.7 41.5-71.5 44-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-6.1-12.2 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.6-3.6-4.8-16.5 3.6-15.4 42.8 2.5 71.5 24.8 71.5 44 0 13-13.4 27.3-35.2 36C290.6 368.7 304 383 304 396zm24-156a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M328 176a32 32 0 1032 32 32 32 0 00-32-32zm-160 0a32 32 0 1032 32 32 32 0 00-32-32z"
      className="kiss_svg__fa-primary"
    />
  </svg>
);

SvgKiss.displayName = "SvgKiss";
SvgKiss.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKiss;
