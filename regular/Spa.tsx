import * as React from "react";

const SvgSpa = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M568.28 192h-.04c-21.38.1-84.49 3.63-147.75 36.03-26.59-78.31-69.27-146.58-121.73-192.22-2.92-2.54-6.83-3.81-10.74-3.81s-7.82 1.27-10.74 3.81c-52.47 45.64-95.16 113.91-121.78 192.23C92.25 195.63 29.14 192.1 7.75 192h-.04c-4.39 0-7.76 3.41-7.72 7.82.23 27.92 7.14 126.14 88.77 199.3C170.99 479.18 252.43 480 285.87 480h4.48c33.57 0 114.83-.98 196.88-80.88 81.64-73.17 88.54-171.38 88.77-199.3.04-4.41-3.32-7.82-7.72-7.82zM122.26 364.73l-.71-.69-.74-.66c-42.39-37.99-60.22-84.4-67.64-119.21 38.78 6.58 91.94 23.31 134.92 65.21l.73.72.76.68c23.54 21.06 41.22 46.39 54.05 77.43l17.79 43.04c-33.77-2.65-85.61-14.37-139.16-66.52zM288 369.86c-13.05-31.56-33.29-65.23-66.41-94.86-7.93-7.73-16.27-14.26-24.65-20.62 20.08-63.83 51.85-120.74 91.08-162.36 39.22 41.62 70.96 98.54 91.03 162.36-8.37 6.36-16.71 12.89-24.64 20.61-33.12 29.64-53.36 63.31-66.41 94.87zm167.19-6.48l-.74.66-.71.69c-53.64 52.23-105.47 63.91-139.18 66.52l17.8-43.05c12.83-31.04 30.51-56.36 54.05-77.43l.76-.68.73-.72c43.01-41.92 96.2-58.65 134.93-65.22-7.41 34.81-25.25 81.23-67.64 119.23z" />
  </svg>
);

SvgSpa.displayName = "SvgSpa";
SvgSpa.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpa;
