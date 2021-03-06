import * as React from "react";

const SvgDrone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M300.34 160l38.86-28.06a64.05 64.05 0 1140.86 40.86L352 211.66v1.56A111.93 111.93 0 10298.78 160zm-88.68 192L172 380.64a64.06 64.06 0 11-40.25-41.17L160 300.34v-1.08A111.93 111.93 0 10212.22 352zM111 0a112 112 0 1049 212.74v-1.08l-28.25-39.13A64 64 0 11172 131.36L211.66 160h.56A112 112 0 00111 0zm289 288a111.58 111.58 0 00-48 10.78v1.56l28.06 38.86a64.05 64.05 0 11-40.86 40.86L300.34 352h-1.56A112 112 0 10400 288z"
      opacity={0.4}
    />
    <path
      d="M432 399.19a31.91 31.91 0 11-63.8 1.81l-67.86-49h-88.68l-67.86 49a31.91 31.91 0 11-32.8-32.8l49-67.86v-88.68l-49-67.86a31.91 31.91 0 1132.8-32.8l67.86 49h88.68l67.86-49a31.91 31.91 0 1132.8 32.8l-49 67.86v88.68l49 67.86a31.9 31.9 0 0131 30.99z"
      className="drone_svg__fa-primary"
    />
  </svg>
);

SvgDrone.displayName = "SvgDrone";
SvgDrone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDrone;
