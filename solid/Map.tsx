import * as React from "react";

const SvgMap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" />
  </svg>
);

SvgMap.displayName = "SvgMap";
SvgMap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMap;
