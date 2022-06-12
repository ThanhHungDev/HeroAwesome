import * as React from "react";

const SvgBoombox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M176 224a112 112 0 10112 112 112 112 0 00-112-112zm0 192a80 80 0 1180-80 80.09 80.09 0 01-80 80zm288-192a112 112 0 10112 112 112 112 0 00-112-112zm0 192a80 80 0 1180-80 80.09 80.09 0 01-80 80zm128-256h-16V56a56.07 56.07 0 00-56-56H120a56.06 56.06 0 00-56 56v104H48a48 48 0 00-48 48v256a48 48 0 0048 48h544a48 48 0 0048-48V208a48 48 0 00-48-48zM96 56a24 24 0 0124-24h400a24 24 0 0124 24v104h-96v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32v-16a16 16 0 00-16-16h-32a16 16 0 00-16 16v16H96zm512 408a16 16 0 01-16 16H48a16 16 0 01-16-16V208a16 16 0 0116-16h544a16 16 0 0116 16zM464 304a32 32 0 1032 32 32 32 0 00-32-32zm-288 0a32 32 0 1032 32 32 32 0 00-32-32z" />
  </svg>
);

SvgBoombox.displayName = "SvgBoombox";
SvgBoombox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoombox;
