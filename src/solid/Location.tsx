import * as React from "react";

const SvgLocation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 224h-50.88C431.61 143.66 368.34 80.39 288 66.88V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v50.88C143.66 80.39 80.39 143.66 66.88 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h50.88C80.39 368.34 143.66 431.61 224 445.12V496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-50.88c80.34-13.51 143.61-76.78 157.12-157.12H496c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM256 384c-70.7 0-128-57.31-128-128s57.3-128 128-128 128 57.31 128 128-57.3 128-128 128zm0-216c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88z" />
  </svg>
);

SvgLocation.displayName = "SvgLocation";
SvgLocation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLocation;
