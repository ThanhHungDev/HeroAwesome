import * as React from "react";

const SvgVhs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 64H16A16 16 0 000 80v320a48 48 0 0048 48h416a48 48 0 0048-48V80a16 16 0 00-16-16zm-16 336a16 16 0 01-16 16H48a16 16 0 01-16-16V192h59.45A130.66 130.66 0 00113 374.12c7.88 6.38 18.31 9.88 29.38 9.88h227.24c11.07 0 21.5-3.5 29.38-9.86A130.68 130.68 0 00420.55 192H480zm-320-78.39V352h-17.62C131.86 352 96 321.73 96 272c0-49.51 35.41-80 46.38-80H160v30.39a63.27 63.27 0 000 99.22zM192 352V192h128v160zm160-129.61V192h17.62c10.52 0 46.38 30.27 46.38 80 0 49.51-35.41 80-46.38 80H352v-30.39a63.27 63.27 0 000-99.22zM480 160H32V96h448z" />
  </svg>
);

SvgVhs.displayName = "SvgVhs";
SvgVhs.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVhs;
