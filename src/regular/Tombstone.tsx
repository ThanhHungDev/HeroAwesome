import * as React from "react";

const SvgTombstone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M336 160h-56v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h56v128c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V208h56c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm160 304h-48V192C448 85.96 362.04 0 256 0S64 85.96 64 192v272H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-96 0H112V192c0-79.4 64.6-144 144-144s144 64.6 144 144v272z" />
  </svg>
);

SvgTombstone.displayName = "SvgTombstone";
SvgTombstone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTombstone;
