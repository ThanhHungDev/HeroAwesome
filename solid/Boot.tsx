import * as React from "react";

const SvgBoot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M0 480l32 32h64l32-32 32 32h64l32-32 32 32h64l32-32 32 32h64l32-32v-32H0v32zM352 80V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v80h336c8.8 0 16-7.2 16-16zm87.3 205.8L320 256h-56c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h56v-32h-56c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h56v-32H0v288h512v-37c0-44.1-30-82.5-72.7-93.2z" />
  </svg>
);

SvgBoot.displayName = "SvgBoot";
SvgBoot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoot;