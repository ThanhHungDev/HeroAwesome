import * as React from "react";

const SvgPizzaSlice = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M100.39 112.19L.54 491.64a16.2 16.2 0 0020 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1132-32 32 32 0 01-32 32zm48-152a32 32 0 1132-32 32 32 0 01-32 32zm104 104a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M128 352a32 32 0 1032 32 32 32 0 00-32-32zm48-152a32 32 0 1032 32 32 32 0 00-32-32zm335.76 145.86C490.88 165.08 340.77 17.32 158.86.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.46 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9zM280 304a32 32 0 1032 32 32 32 0 00-32-32z"
      className="pizza-slice_svg__fa-primary"
    />
  </svg>
);

SvgPizzaSlice.displayName = "SvgPizzaSlice";
SvgPizzaSlice.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPizzaSlice;
