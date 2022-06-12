import * as React from "react";

const SvgWineGlassAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M213.34 480H160V350.27c76.73-8.72 134.57-77.6 127.4-157.61L271.44 14.55C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.57 272.67 51.27 341.55 128 350.27V480H74.67C59.94 480 48 491.94 48 506.67c0 2.95 2.39 5.33 5.33 5.33h181.34c2.95 0 5.33-2.39 5.33-5.33 0-14.73-11.94-26.67-26.66-26.67zm27.54-448l8.6 96H38.52l8.6-96h193.76zM32.47 195.51L35.66 160h216.69l3.18 35.51c1.81 20.16-1.58 39.48-9.07 56.6-17.71 40.48-58.27 66.15-102.45 66.15s-84.74-25.67-102.45-66.15c-7.51-17.12-10.89-36.44-9.09-56.6z" />
  </svg>
);

SvgWineGlassAlt.displayName = "SvgWineGlassAlt";
SvgWineGlassAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWineGlassAlt;