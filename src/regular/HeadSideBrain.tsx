import * as React from "react";

const SvgHeadSideBrain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M509.21 275c-20.94-47.12-48.44-151.73-73.08-186.75A207.94 207.94 0 00266.09 0H200C95.47 0 4.12 80.08.14 184.55A191.3 191.3 0 0064 334.82V496a16 16 0 0016 16h16a16 16 0 0016-16V313.39l-16-14.31C49.11 257 32.94 187.36 63.86 126.58 89.2 76.78 143.11 48 199 48h67.1a160.06 160.06 0 01130.78 67.87c11.2 15.91 28.06 65.67 40.38 102 6.55 19.32 12.86 37.92 19 54.13H400v112a16 16 0 01-16 16h-80v96a16 16 0 0016 16h16a16 16 0 0016-16v-48h32a64 64 0 0064-64v-64h32a32 32 0 0029.21-45zM313.6 192c21.21 0 38.4-16.48 38.4-36.8s-17.19-36.8-38.4-36.8H311a38.09 38.09 0 00-35.8-25.6c-7.1 0-13.38 2.45-19.08 5.81C249.35 87.68 237.8 80 224 80s-25.34 7.68-32.11 18.61c-5.71-3.36-12-5.81-19.09-5.81a38.4 38.4 0 00-38.4 38.4A38.4 38.4 0 0096 169.6c0 16.84 11 30.74 26.11 35.92-.06.86-.51 1.6-.51 2.48a38.4 38.4 0 0038.4 38.4 37.91 37.91 0 0012.8-2.58V288H224v-44.18a37.91 37.91 0 0012.8 2.58 38.4 38.4 0 0038.4-38.4 37.84 37.84 0 00-3.73-16z" />
  </svg>
);

SvgHeadSideBrain.displayName = "SvgHeadSideBrain";
SvgHeadSideBrain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideBrain;