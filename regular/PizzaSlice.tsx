import * as React from "react";

const SvgPizzaSlice = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M158.87.15c-1.09-.1-2.18-.15-3.26-.15a32.85 32.85 0 00-32.07 24.27L.55 491.63A16.24 16.24 0 0016.15 512a16.54 16.54 0 004.4-.61l467.6-129.66c15.72-4.35 25.49-19.67 23.62-35.89C490.89 165.08 340.78 17.32 158.87.15zm-97.82 450.2l81.7-310.48c122.13 20.54 206.16 103.39 228.39 224.5zm356.39-98.82C390.5 215 292.6 118.47 155 93.45l11.61-44.12C315.39 69.09 439.5 190.64 462.43 339.06zM192 192a32 32 0 1032 32 32 32 0 00-32-32zm-32 128a32 32 0 1032 32 32 32 0 00-32-32zm96 0a32 32 0 1032-32 32 32 0 00-32 32z" />
  </svg>
);

SvgPizzaSlice.displayName = "SvgPizzaSlice";
SvgPizzaSlice.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPizzaSlice;
