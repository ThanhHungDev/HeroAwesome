import * as React from "react";

const SvgRoute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M432 352H320c-26.5 0-48-21.5-48-48s21.5-48 48-48h96s96-107 96-160-43-96-96-96-96 43-96 96c0 34.6 40.9 92.2 69.3 128H320c-44.1 0-80 35.9-80 80s35.9 80 80 80h112c26.5 0 48 21.5 48 48s-21.5 48-48 48H122.7c28.4-35.8 69.3-93.4 69.3-128 0-53-43-96-96-96S0 299 0 352s96 160 96 160h336c44.1 0 80-35.9 80-80s-35.9-80-80-80zM352 96c0-35.3 28.7-64 64-64s64 28.7 64 64c0 20.4-30.1 68-64 110.4-34-42.6-64-90.6-64-110.4zM32 352c0-35.3 28.7-64 64-64s64 28.7 64 64c0 20.4-30.1 68-64 110.4-34-42.6-64-90.6-64-110.4zm64-16c-21.2 0-21.1 32 0 32 21.2 0 21.1-32 0-32zM416 80c-21.2 0-21.1 32 0 32 21.2 0 21.1-32 0-32z" />
  </svg>
);

SvgRoute.displayName = "SvgRoute";
SvgRoute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRoute;