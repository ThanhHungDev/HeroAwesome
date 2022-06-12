import * as React from "react";

const SvgLocationCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M304.51 140.2l-182.06 83.66c-19.85 9.23-30.01 29.64-25.32 50.81 4.63 20.69 22.67 35.15 43.89 35.15h52.99v52.73c0 21.14 14.54 39.1 35.32 43.69 3.44.76 6.88 1.14 10.25 1.14 17.38 0 33.01-9.82 40.8-26.45l84-181.13.38-.83c6.94-16.57 2.94-35.75-10.22-48.87-13.23-13.15-32.49-17.15-50.03-9.9zm-62.49 209.41v-87.58h-88.06l163.53-75.15-75.47 162.73zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z" />
  </svg>
);

SvgLocationCircle.displayName = "SvgLocationCircle";
SvgLocationCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLocationCircle;