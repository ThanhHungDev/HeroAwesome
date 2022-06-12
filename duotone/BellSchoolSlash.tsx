import * as React from "react";

const SvgBellSchoolSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M486.36 344.13a48 48 0 1175.23 58.14zM272 160a47.69 47.69 0 00-18.87 3.88l66.33 51.26A48 48 0 00272 160zm78.19 240.67L66 181a209.13 209.13 0 00-2 27c0 114.88 93.12 208 208 208a207.23 207.23 0 0078.19-15.33zM272 448a238.41 238.41 0 01-144-48.46V480a32 32 0 0032 32h224a32 32 0 0032-32v-28.47l-37.66-29.11A236.49 236.49 0 01272 448zm-46.21-305.26a80 80 0 01121 93.54l103 79.63A207 207 0 00480 208C480 93.12 386.88 0 272 0a207.34 207.34 0 00-149.22 63.13z"
      opacity={0.4}
    />
    <path
      d="M633.82 458.09L45.47 3.38A16 16 0 0023 6.17L3.37 31.46a16 16 0 002.81 22.45l588.34 454.71a16 16 0 0022.48-2.79l19.64-25.27a16 16 0 00-2.82-22.47z"
      className="bell-school-slash_svg__fa-primary"
    />
  </svg>
);

SvgBellSchoolSlash.displayName = "SvgBellSchoolSlash";
SvgBellSchoolSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellSchoolSlash;
