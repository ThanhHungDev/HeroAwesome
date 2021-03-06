import * as React from "react";

const SvgRandom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M505 359l-80-80c-15-15-41-4.47-41 17v40h-32l-52.78-56.55-53.33 57.14 70.55 75.6a12 12 0 008.77 3.81H384v40c0 21.46 26 32 41 17l80-80a24 24 0 000-34zM122.79 96H12a12 12 0 00-12 12v56a12 12 0 0012 12h84l52.78 56.55 53.33-57.14-70.55-75.6a12 12 0 00-8.77-3.81z"
      opacity={0.4}
    />
    <path
      d="M505 119a24 24 0 010 34l-80 80c-15 15-41 4.48-41-17v-40h-32L131.56 412.19a12 12 0 01-8.77 3.81H12a12 12 0 01-12-12v-56a12 12 0 0112-12h84L316.44 99.81a12 12 0 018.78-3.81H384V56c0-21.44 25.94-32 41-17z"
      className="random_svg__fa-primary"
    />
  </svg>
);

SvgRandom.displayName = "SvgRandom";
SvgRandom.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRandom;
