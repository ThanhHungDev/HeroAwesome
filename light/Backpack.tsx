import * as React from "react";

const SvgBackpack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M320 64h-16V48c0-26.47-21.53-48-48-48h-64c-26.47 0-48 21.53-48 48v16h-16C57.31 64 0 121.31 0 192v256c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V192c0-70.69-57.31-128-128-128zM176 48c0-8.83 7.19-16 16-16h64c8.81 0 16 7.17 16 16v16h-96V48zm160 432H112v-96h224v96zm0-128H112v-32c0-17.67 14.33-32 32-32h160c17.67 0 32 14.33 32 32v32zm80 96c0 17.64-14.36 32-32 32h-16V320c0-35.29-28.71-64-64-64H144c-35.29 0-64 28.71-64 64v160H64c-17.64 0-32-14.36-32-32V192c0-52.94 43.06-96 96-96h192c52.94 0 96 43.06 96 96v256zM312 160H136c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgBackpack.displayName = "SvgBackpack";
SvgBackpack.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBackpack;
