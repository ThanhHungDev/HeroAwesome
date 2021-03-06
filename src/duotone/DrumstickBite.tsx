import * as React from "react";

const SvgDrumstickBite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M193.69 392.5c-9.72 9.75-11.09 24-6 36.75a60.32 60.32 0 01-98.73 65c-15.27-15.27-19.58-36.5-15.09-56.1-19.6 4.49-40.83.18-56.1-15.09a60.31 60.31 0 0165-98.72c12.76 5.07 27.05 3.69 36.76-6L160 277.87V288a64 64 0 0064 64h10.2z"
      opacity={0.4}
    />
    <path
      d="M160.06 192c0-64 27.7-107 63.18-142.43a169.5 169.5 0 01239.55 0c34.32 34.28 50.44 79.6 49.14 124.56-42-22.66-94.38-17.56-128.77 16.8-40.88 40.84-40.69 107.17-1.05 151.07a187.7 187.7 0 01-61.9 10H224a64 64 0 01-64-64z"
      className="drumstick-bite_svg__fa-primary"
    />
  </svg>
);

SvgDrumstickBite.displayName = "SvgDrumstickBite";
SvgDrumstickBite.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDrumstickBite;
