import * as React from "react";

const SvgOctagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M497.9 150.6L361.43 14.1A48 48 0 00327.54 0H184.46a48 48 0 00-33.89 14.1L14.1 150.5A48 48 0 000 184.4v143.1a48 48 0 0014.1 33.9l136.47 136.5a48 48 0 0033.89 14.1h143.08a48 48 0 0033.89-14.1L497.9 361.4a48 48 0 0014.1-33.9v-143a48 48 0 00-14.1-33.9zM424.39 323L323 424.38a26 26 0 01-18.35 7.62h-97.3a26 26 0 01-18.35-7.62L87.61 323A26 26 0 0180 304.62v-97.33a26 26 0 017.62-18.39L189 87.61A26 26 0 01207.35 80h97.3A26 26 0 01323 87.62L424.39 189a26 26 0 017.61 18.38v97.24a26 26 0 01-7.61 18.38z"
      opacity={0.4}
    />
    <path
      d="M432 207.38v97.24a26 26 0 01-7.61 18.38L323 424.38a26 26 0 01-18.35 7.62h-97.3a26 26 0 01-18.35-7.62L87.61 323A26 26 0 0180 304.62v-97.33a26 26 0 017.62-18.39L189 87.61A26 26 0 01207.35 80h97.3A26 26 0 01323 87.62L424.39 189a26 26 0 017.61 18.38z"
      className="octagon_svg__fa-primary"
    />
  </svg>
);

SvgOctagon.displayName = "SvgOctagon";
SvgOctagon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOctagon;
