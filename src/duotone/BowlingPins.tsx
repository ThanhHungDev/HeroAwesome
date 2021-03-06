import * as React from "react";

const SvgBowlingPins = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M133.17 160c.8-35.8 20.9-59.1 18.8-96C150.07 29.8 129.27.1 96 0 62.6.1 41.9 29.8 40 64c-2.1 36.9 18 60.2 18.8 96zm181.6 0h74.4c.8-35.7 20.9-59.1 18.8-96-1.9-34.3-22.6-63.9-56-64-33.3.1-54.1 29.8-56 64-2.1 36.9 18 60.2 18.8 96zm128.9 160c-10.8-48.1-39.9-82.8-50.7-128h-81.9c-10.8 45.2-39.9 79.9-50.7 128-11.5 51.1.6 140.5 26.7 192h130c26-51.5 38-141 26.6-192zm-306.8-128h-81.8c-10.8 45.2-40 79.9-50.7 128-11.5 51.1.5 140.5 26.6 192H161c26.1-51.5 38.1-140.9 26.7-192-10.83-48.1-40.03-82.8-50.83-128z"
      opacity={0.4}
    />
    <path
      d="M59 160l-4 32h82l-4-32zm330 0h-74l-4 32h82z"
      className="bowling-pins_svg__fa-primary"
    />
  </svg>
);

SvgBowlingPins.displayName = "SvgBowlingPins";
SvgBowlingPins.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBowlingPins;
