import * as React from "react";

const SvgShishKebab = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M511.21 84.17c-3.75-29.74-21.09-55.74-47.52-71.32a94.9 94.9 0 00-96.22.5c-23.7 14.27-39.82 36.62-45.41 63s.18 53.93 14.87 76.37l-25.78 25.76-42.44-42.45a62.59 62.59 0 00-88.54 0l-42.31 42.31A62.3 62.3 0 00119.62 226 62.39 62.39 0 0072 244.28l-42.3 42.3a62.68 62.68 0 000 88.54L72 417.45 2.34 487a8 8 0 000 11.32l11.31 11.31a8 8 0 0011.32 0l69.64-69.58 42.27 42.27a62.57 62.57 0 0088.54 0l42.3-42.3A62.4 62.4 0 00286 392.38a62.34 62.34 0 0047.67-18.25l42.29-42.3a62.56 62.56 0 000-88.54l-42.15-42.15 25.78-25.75c10.85-10.84 13.08-27.69 5.53-40.07-6.3-10.35-12.12-21.3-13-33.39-1.79-25.28 10-47.52 30.85-60.55 19.09-11.92 44.05-12.64 63.6-1.48 18.32 10.48 30.35 28.1 32.92 48.31A63.64 63.64 0 01466.18 136a8 8 0 00.3 10.76l11.44 11.44a8 8 0 0011.64-.25 95.23 95.23 0 0021.65-73.78zM245.09 417.42l-42.3 42.3a30.6 30.6 0 01-43.28 0L52.28 352.49a30.6 30.6 0 010-43.28l42.3-42.3a30.59 30.59 0 0143.28 0l107.23 107.23a30.59 30.59 0 010 43.28zm108.22-151.5a30.62 30.62 0 010 43.29L311 351.51a30.62 30.62 0 01-43.29 0L160.49 244.28a30.62 30.62 0 010-43.29l42.3-42.3a30.62 30.62 0 0143.29 0z" />
  </svg>
);

SvgShishKebab.displayName = "SvgShishKebab";
SvgShishKebab.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShishKebab;
