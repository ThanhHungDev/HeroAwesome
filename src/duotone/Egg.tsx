import * as React from "react";

const SvgEgg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M304 320a112 112 0 01-224 0c0-18.32 4.26-44.4 11.69-71.56a471.69 471.69 0 0133.84-88c14-27.45 29.29-49.88 44.29-64.87l.36-.36a31 31 0 0143.64 0l.36.36c15 15 30.31 37.42 44.29 64.87a471.69 471.69 0 0133.84 88C299.74 275.6 304 301.68 304 320z"
      opacity={0.4}
    />
    <path
      d="M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0zm0 432A112.12 112.12 0 0180 320c0-18.32 4.26-44.4 11.69-71.56a471.69 471.69 0 0133.84-88c14-27.45 29.29-49.88 44.29-64.87l.36-.36a31 31 0 0143.64 0l.36.36c15 15 30.31 37.42 44.29 64.87a471.69 471.69 0 0133.84 88C299.74 275.6 304 301.68 304 320a112.12 112.12 0 01-112 112z"
      className="egg_svg__fa-primary"
    />
  </svg>
);

SvgEgg.displayName = "SvgEgg";
SvgEgg.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEgg;
