import * as React from "react";

const SvgLamp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M158.31 288h131.4C327 325.2 352 386.8 352 428.8c0 28.4-11.5 54.2-30.5 74.3-5.7 6-13.9 8.9-22.2 8.9H148.71c-8.3 0-16.5-2.9-22.2-8.9-19-20-30.5-45.9-30.5-74.3-.01-42 24.99-103.6 62.3-140.8z"
      opacity={0.4}
    />
    <path
      d="M93.61 17.7c5.2-10.9 15.6-17.7 27-17.7h219.8c12 0 22.9 7.6 27.6 19.4l77.5 192c8.6 21.1-6 44.6-27.6 44.6H30.21c-22.4 0-37-25-27-46.3z"
      className="lamp_svg__fa-primary"
    />
  </svg>
);

SvgLamp.displayName = "SvgLamp";
SvgLamp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLamp;
