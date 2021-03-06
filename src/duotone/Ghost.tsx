import * as React from "react";

const SvgGhost = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M186.1.09C81 3.24 0 94.92 0 200.05V464a16 16 0 0027.31 11.31l24.92-18.53A16 16 0 0173.74 459l43 48.35a16 16 0 0022.63 0L180 461.46a16 16 0 0123.92 0l40.72 45.85a16 16 0 0022.63 0L310.26 459a16 16 0 0121.51-2.21l24.92 18.53C366.77 485.36 384 478.22 384 464V192C384 84 294.83-3.17 186.1.09zM128 224a32 32 0 1132-32 32 32 0 01-32 32zm128 0a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M128 160a32 32 0 1032 32 32 32 0 00-32-32zm128 0a32 32 0 1032 32 32 32 0 00-32-32z"
      className="ghost_svg__fa-primary"
    />
  </svg>
);

SvgGhost.displayName = "SvgGhost";
SvgGhost.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGhost;
