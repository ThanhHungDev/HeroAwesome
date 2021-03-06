import * as React from "react";

const SvgSadTear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168a32 32 0 11-32 32 32 32 0 0132-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8a8 8 0 0111.2-1.6 7.58 7.58 0 011.6 1.6C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176a32 32 0 1132-32 32 32 0 01-32 32zm170.2 154.2A117.35 117.35 0 00248 352c-21.2 0-21.2-32 0-32a148.8 148.8 0 01114.7 53.8c13.8 16.4-11.2 36.5-24.5 20.4z"
      opacity={0.4}
    />
    <path
      d="M328 176a32 32 0 1032 32 32 32 0 00-32-32zM145.6 291.2C132.5 308.6 104 349 104 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.5-60.4-41.6-77.8a8 8 0 00-11.2-1.6 7.58 7.58 0 00-1.6 1.6zM168 176a32 32 0 1032 32 32 32 0 00-32-32z"
      className="sad-tear_svg__fa-primary"
    />
  </svg>
);

SvgSadTear.displayName = "SvgSadTear";
SvgSadTear.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSadTear;
