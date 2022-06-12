import * as React from "react";

const SvgTombstoneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 416h-48V200.05C448 94.92 366.99 3.24 261.9.09 153.17-3.17 64 84 64 192v224H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zM96 192c0-88.22 71.78-160 160-160s160 71.78 160 160v224H96V192zm383.95 288H32.01l.04-32h447.94l-.04 32z" />
  </svg>
);

SvgTombstoneAlt.displayName = "SvgTombstoneAlt";
SvgTombstoneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTombstoneAlt;