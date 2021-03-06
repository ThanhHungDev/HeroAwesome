import * as React from "react";

const SvgRepeatAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M493.54 181.5A159 159 0 01512 257.25C511.34 345.4 438.56 416 350.4 416H192v47.5c0 22.5-26.18 32.3-41 17.5l-80-80a24 24 0 010-33.94l80-80c15.11-15.11 41-4.34 41 17v48h158.87c52.82 0 96.58-42.18 97.12-95a95.53 95.53 0 00-9.21-42.06 23.94 23.94 0 014.8-27.28c4.74-4.71 8.64-8.55 11.87-11.79a24 24 0 0138.09 5.57z"
      opacity={0.4}
    />
    <path
      d="M68.42 324.35c-4.74 4.71-8.64 8.56-11.87 11.79a24 24 0 01-38.09-5.57A159 159 0 010 254.82C.66 166.67 73.44 96 161.6 96H320V48.58c0-22.29 26-32.47 41-17.52l80 80a24 24 0 010 33.94l-80 80c-14.85 14.85-41 4.91-41-17.46V160H161.12c-52.81 0-96.57 42.18-97.12 95a95.47 95.47 0 009.22 42 23.94 23.94 0 01-4.8 27.35z"
      className="repeat-alt_svg__fa-primary"
    />
  </svg>
);

SvgRepeatAlt.displayName = "SvgRepeatAlt";
SvgRepeatAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRepeatAlt;
