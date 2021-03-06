import * as React from "react";

const SvgCat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M448 96h-64l-64-64v134.4a96 96 0 00192 0V32zm-72 80a16 16 0 1116-16 16 16 0 01-16 16zm80 0a16 16 0 1116-16 16 16 0 01-16 16zm-165.41 16a204.07 204.07 0 00-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 00-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 00-96-96 32 32 0 000 64 32 32 0 0132 32v256a64.06 64.06 0 0064 64h176a16 16 0 0016-16v-16a32 32 0 00-32-32h-32l128-96v144a16 16 0 0016 16h32a16 16 0 0016-16V289.86a126.78 126.78 0 01-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
      opacity={0.4}
    />
    <path
      d="M376 144a16 16 0 1016 16 16 16 0 00-16-16zm80 0a16 16 0 1016 16 16 16 0 00-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 00-37.42 40.09zM256 272v-77.11a198.62 198.62 0 00-43.15 12.38z"
      className="cat_svg__fa-primary"
    />
  </svg>
);

SvgCat.displayName = "SvgCat";
SvgCat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCat;
