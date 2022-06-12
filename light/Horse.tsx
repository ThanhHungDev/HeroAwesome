import * as React from "react";

const SvgHorse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M575.95 86.27c-.01-9.62-3.67-15.92-9.14-22.56 5.39-9.45 8.38-20.32 8.38-31.71 0-17.67-14.33-32-32-32H432c-70.58 0-128 57.42-128 128H163.36c-35.98 0-67.27 19.42-84.71 48.13C35.11 176.87 0 212.28 0 256v56c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-56c0-21.5 14.23-39.48 33.71-45.59-.96 5.54-1.71 11.15-1.71 16.96 0 24.2 8.9 47.33 24.53 65.24l-21.97 74.28c-3.12 10.77-3.38 22.03-.8 32.74l21.13 87.86C90.34 501.86 103.2 512 118 512h57.53c20.95 0 36.12-19.75 31.02-39.86l-21.68-85.57 19.29-53.73L288 351.47V480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V323.81c20.5-21.51 32-49.75 32-79.6v-50.52l14.55 21.82c19.11 28.67 49.98 20.67 55.45 18.8l25.52-8.71c19.44-6.63 32.5-24.9 32.49-45.45l-.06-93.88zm-42.78 109.04l-25.52 8.71c-9.33 3.19-16.14-2.76-18.48-6.27L464 160l-48-16v100.21c0 26.67-12.64 50.17-32 65.6V480h-64V325.8l-136.43-30.32-32.12 89.47L175.53 480H118l-21.13-87.86a31.698 31.698 0 01.37-16.18l27.63-93.41C107.45 270.37 96 250.24 96 227.37c0-37.21 30.16-67.37 67.37-67.37H336v-32c0-53.02 42.98-96 96-96h111.19c0 13.29-8.11 24.67-19.63 29.5l20.39 24.78.05 93.88a16 16 0 01-10.83 15.15zM480 80c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z" />
  </svg>
);

SvgHorse.displayName = "SvgHorse";
SvgHorse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorse;