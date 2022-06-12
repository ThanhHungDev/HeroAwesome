import * as React from "react";

const SvgBells = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M117.3 119.08c-.8 2.1-14.7 40.5-15.4 42.71-29.2 80.31-66.4 94.55-87.4 105.28C-5.6 277.4-5 307.78 17.5 316l243.3 88.84c8.4-19.25 19.5-45.72-3.3-108.49L242 253.57c-27.9-76.91 5-161 73.7-200.34a130.82 130.82 0 00-27.4-14.17c-69.25-25.19-145.77 10.62-171 80.02zM543.77 411L428.1 453a63.76 63.76 0 00115.67-42z"
      opacity={0.4}
    />
    <path
      d="M137.85 444.14a63.73 63.73 0 0073.83-23.2L96.23 378.83a63.78 63.78 0 0041.62 65.31zM625.55 299c-21-10.73-58.33-25-87.44-105.28-.8-2.2-14.7-40.61-15.4-42.72C497.4 81.63 420.88 45.84 351.64 71.1s-104.92 102-79.73 171.37c.8 2.11 14.81 40.52 15.61 42.72 29.21 80.32 9.7 115.22.5 137-8.8 20.76 11.21 43.72 33.72 35.5L622.45 348c20.55-7.55 24.9-37.74 3.1-49z"
      className="bells_svg__fa-primary"
    />
  </svg>
);

SvgBells.displayName = "SvgBells";
SvgBells.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBells;
