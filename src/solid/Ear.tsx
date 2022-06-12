import * as React from "react";

const SvgEar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C85.96 0 0 85.96 0 192v176c0 79.53 64.47 144 144 144s144-64.47 144-144v-9.9c57.33-33.21 96-95.08 96-166.1C384 85.96 298.04 0 192 0zm128 200c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-8c0-52.94-43.06-96-96-96s-96 43.06-96 96c0 17.64 14.36 32 32 32h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-8c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h8c17.64 0 32-14.36 32-32s-14.36-32-32-32h-32c-35.3 0-64-28.7-64-64 0-70.58 57.42-128 128-128s128 57.42 128 128v8z" />
  </svg>
);

SvgEar.displayName = "SvgEar";
SvgEar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEar;