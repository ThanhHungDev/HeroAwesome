import * as React from "react";

const SvgBallot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M144 80h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32zm0 64h-32v-32h32v32zM416 0H32C14.3 0 0 14.4 0 32v448c0 17.6 14.3 32 32 32h384c17.7 0 32-14.4 32-32V32c0-17.6-14.3-32-32-32zm0 480H32V32h384v448zm-72-240H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-200 96h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32zm0 64h-32v-32h32v32zm200-32H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-256H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-200 96h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32zm0 64h-32v-32h32v32z" />
  </svg>
);

SvgBallot.displayName = "SvgBallot";
SvgBallot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBallot;
