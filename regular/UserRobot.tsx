import * as React from "react";

const SvgUserRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M272 208a32 32 0 10-32-32 31.998 31.998 0 0032 32zm-64 64h32v-32h-32zm64 0h32v-32h-32zm103.488 35.236A79.157 79.157 0 00384 272v-16h30a17.98 17.98 0 0018-18v-60a17.979 17.979 0 00-18-18h-30v-16a79.999 79.999 0 00-80-80h-56V24a24 24 0 00-48 0v40h-56a79.999 79.999 0 00-80 80v16H34a17.978 17.978 0 00-18 18v60a17.98 17.98 0 0018 18h30v16a79.157 79.157 0 008.512 35.236C30.914 317.76 0 355.131 0 400v48a64 64 0 0064 64h320a64 64 0 0064-64v-48c0-44.87-30.914-82.24-72.512-92.764zM112 144a32.037 32.037 0 0132-32h160a32.037 32.037 0 0132 32v128a32.037 32.037 0 01-32 32H144a32.037 32.037 0 01-32-32zm96 320h-32v-32a16 16 0 0132 0zm64-16a16 16 0 1116-16 16 16 0 01-16 16zm128 0a16.018 16.018 0 01-16 16h-64v-48a32 32 0 00-32-32H160a32 32 0 00-32 32v48H64a16.018 16.018 0 01-16-16v-48a48.055 48.055 0 0148-48h256a48.055 48.055 0 0148 48zM176 208a32 32 0 10-32-32 31.998 31.998 0 0032 32zm0 32h-32v32h32z" />
  </svg>
);

SvgUserRobot.displayName = "SvgUserRobot";
SvgUserRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserRobot;
