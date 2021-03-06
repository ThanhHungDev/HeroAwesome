import * as React from "react";

const SvgMandolin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M278.63 278.63l-45.25-45.25 41.19-41.19C90.39 190.67 46 241 30.73 256.28c-46.8 46.79-39.51 150.36 17.54 207.45s160.66 64.34 207.45 17.53c15.28-15.26 65.6-59.64 64.08-243.8zM176 384a48 48 0 1148-48 48 48 0 01-48 48z"
      opacity={0.4}
    />
    <path
      d="M509.56 70.48l-40.07 64a32 32 0 01-19.11 14L394.28 163 278.63 278.63l-45.25-45.25L349 117.74l14.51-56.12a32 32 0 0114-19.11l64-40.07a16 16 0 0119.81 2.25l46 46a16 16 0 012.24 19.79z"
      className="mandolin_svg__fa-primary"
    />
  </svg>
);

SvgMandolin.displayName = "SvgMandolin";
SvgMandolin.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMandolin;
