import * as React from "react";

const SvgVhs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M0 160v240a48 48 0 0048 48h416a48 48 0 0048-48V160zm128 224H79.14C60 362.74 48 334.88 48 304s12-58.73 31.14-80H128zm192 0H192V224h128zm112.86 0H384V224h48.86C452 245.26 464 273.12 464 304s-12 58.73-31.14 80z"
      opacity={0.4}
    />
    <path
      d="M496 64H16A16 16 0 000 80v80h512V80a16 16 0 00-16-16zM384 224v34.94a47.73 47.73 0 010 90.12V384h48.86C452 362.73 464 334.87 464 304s-12-58.74-31.14-80zM48 304c0 30.88 12 58.74 31.14 80H128v-34.94a47.73 47.73 0 010-90.12V224H79.14C60 245.27 48 273.13 48 304z"
      className="vhs_svg__fa-primary"
    />
  </svg>
);

SvgVhs.displayName = "SvgVhs";
SvgVhs.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVhs;
