import * as React from "react";

const SvgPlaneDeparture = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M80.52 339.28A40.69 40.69 0 00110.06 352l127.06-.17a73.86 73.86 0 0032.45-7.61l283.1-140.31c29.18-14.46 52.82-34.58 68.36-58.18 18-27.27 22.38-50.28 13.16-68.4-11.59-22.86-42-30.76-72.7-30.76-26 0-52.45 6.61-78.76 19.64l-92.71 46-208.71-76.54A25.67 25.67 0 00168 32a26 26 0 00-11.45 2.68l-64 31.7a25.07 25.07 0 00-13.8 19.32A24 24 0 0090.2 109l136.53 84.1-83.95 41.61L76 201.83a25.86 25.86 0 00-22.84 0l-39.07 19.38A25.11 25.11 0 00.51 238.8a24.87 24.87 0 005.67 21.41zM64.6 231.87l78.22 38.51 149.94-74.31L118.54 89.23l49.28-24.42 224.09 82.12 105-52c21.85-10.83 43.58-16.32 64.59-16.32 16.3 0 39.32 3.6 44.23 13.28 3.41 6.71-.84 20.26-11.36 36.26-12.43 18.87-31.74 35.17-55.85 47.12L255.41 315.54a41.63 41.63 0 01-18.32 4.29l-127 .17a8.77 8.77 0 01-6.29-2.66l-67.3-71.53 28.1-13.94zM632 448H9.1a8 8 0 00-8 8v16a8 8 0 008 8H632a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgPlaneDeparture.displayName = "SvgPlaneDeparture";
SvgPlaneDeparture.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneDeparture;