import * as React from "react";

const SvgBaby = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M272.07 288v48L216 400h-48l-55.93-64-.07-48z" opacity={0.4} />
    <path
      d="M192 160a80 80 0 10-80-80 80 80 0 0080 80zm-52.46 259L168 400l-55.93-64v-.06l-.07.06-57.33 49a40 40 0 00-3 59.24l56 56a40 40 0 1056.56-56.56zM376 143.19a39.81 39.81 0 00-55.86-7.88l-40.5 28.39a152.31 152.31 0 01-175.28 0l-40.47-28.39a40 40 0 00-48 63.9q1 .78 2.13 1.5l40.49 28.5A231.24 231.24 0 00112 257.1V288h160v-30.9a231.24 231.24 0 0053.49-27.89l40.51-28.5q1.09-.72 2.13-1.5a40.08 40.08 0 007.87-56.02zM328.33 385L272 336l-56 64 27.46 19-24.74 24.75a40 40 0 1056.57 56.56l56-56a40 40 0 00-3-59.24z"
      className="baby_svg__fa-primary"
    />
  </svg>
);

SvgBaby.displayName = "SvgBaby";
SvgBaby.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBaby;
