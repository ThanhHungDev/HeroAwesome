import * as React from "react";

const SvgHammerWar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352.07 32c-1.75 0-3.53.14-5.33.44L240 50.23V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v34.23L37.26 32.44c-1.79-.3-3.58-.44-5.33-.44C14.64 32 0 46.05 0 64.01v191.98C0 273.95 14.64 288 31.94 288c1.75 0 3.53-.14 5.33-.44L144 269.77V496c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V269.77l106.74 17.79c1.79.3 3.57.44 5.33.44 17.3 0 31.94-14.05 31.94-32.01V64.01C384 46.05 369.36 32 352.07 32zM176 32h32v23.57l-16 2.67-16-2.67V32zm32 448h-32V264.43l16-2.67 16 2.67V480zm144-224.01L197.26 230.2l-5.26-.88-5.26.88L32 255.99V64.01L186.74 89.8l5.26.88 5.26-.88L352 64.01v191.98z" />
  </svg>
);

SvgHammerWar.displayName = "SvgHammerWar";
SvgHammerWar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHammerWar;
