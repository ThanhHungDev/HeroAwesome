import * as React from "react";

const SvgTilde = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 168v71.85c0 35.91-23.16 69.16-58.01 77.84-31.8 7.91-64.07-4.93-81.96-30.74L200.75 178.4c-21.13-30.46-55.42-50.58-92.49-50.38C48.5 128.32 0 177.02 0 236.84V312c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-71.85c0-35.91 23.16-69.16 58.01-77.84 31.8-7.91 64.07 4.93 81.96 30.74l75.28 108.55c21.13 30.46 55.42 50.58 92.49 50.38 59.76-.3 108.26-49 108.26-108.82V168c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8z" />
  </svg>
);

SvgTilde.displayName = "SvgTilde";
SvgTilde.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTilde;
