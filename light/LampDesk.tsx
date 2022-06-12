import * as React from "react";

const SvgLampDesk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M494.42 64H369.14l-40.57-40.57a80 80 0 00-113.14 113.14l4.69 4.68-103.43 103.42a16.06 16.06 0 00-4.07 15.8L158 416H80c-35.09 0-68.12 23.22-78.53 55.2A30.19 30.19 0 006 498.55 32.64 32.64 0 0032.27 512h319.46A32.64 32.64 0 00378 498.55a30.21 30.21 0 004.47-27.36C372 439.2 339 416 304 416H191.35L146 260.59l96.74-96.71L256 177.14v125.28A17.53 17.53 0 00273.67 320a17.18 17.18 0 0012.33-5.18l60.16-60.16C358.6 265.24 374.39 272 392 272a72.08 72.08 0 0072-72c0-17.61-6.75-33.4-17.33-45.87L506.82 94c11.06-11.1 3.23-30-12.4-30zM304 448c21.6 0 41.84 13.94 47.75 32H31.93c6.25-19.19 26.46-32 48.09-32zm88-208a38.92 38.92 0 01-23.37-7.83l55.54-55.54A38.94 38.94 0 01432 200a40 40 0 01-40 40zm-104 27.53V163.88l-49.94-49.94a48 48 0 0167.88-67.88L355.88 96h103.65z" />
  </svg>
);

SvgLampDesk.displayName = "SvgLampDesk";
SvgLampDesk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampDesk;
