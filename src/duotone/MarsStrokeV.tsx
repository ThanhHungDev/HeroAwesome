import * as React from "react";

const SvgMarsStrokeV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path
      d="M200.58 408.27a80.12 80.12 0 11-.05-113.5l.05.05a80.45 80.45 0 010 113.45z"
      opacity={0.4}
    />
    <path
      d="M284.38 319.45a144.66 144.66 0 00-38.56-70.08A143 143 0 00176 210.63v-25.45h20a12 12 0 0012-12V133a12 12 0 00-12-12h-20V96.09h24a12 12 0 008.5-20.57l-55.89-56a12 12 0 00-17 0l-56 56.09A12 12 0 0088.1 96.2h24V121h-20a12 12 0 00-12 12v40.13a12 12 0 0012 12h20v25.45C34.52 228.34-14 305.76 3.62 383.56S98.42 510.07 176 492.37s126-95.13 108.38-172.92zm-83.8 88.82a80.12 80.12 0 11-.05-113.5l.05.05a80.45 80.45 0 010 113.45z"
      className="mars-stroke-v_svg__fa-primary"
    />
  </svg>
);

SvgMarsStrokeV.displayName = "SvgMarsStrokeV";
SvgMarsStrokeV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMarsStrokeV;
