import * as React from "react";

const SvgBallot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M360 0H24A23.94 23.94 0 000 24v464a23.94 23.94 0 0024 24h336a23.94 23.94 0 0024-24V24a23.94 23.94 0 00-24-24zM128 400a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-128a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-128a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm192 248a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-128a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-128a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M112 352H80a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128H80a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128H80a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="ballot_svg__fa-primary"
    />
  </svg>
);

SvgBallot.displayName = "SvgBallot";
SvgBallot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBallot;
