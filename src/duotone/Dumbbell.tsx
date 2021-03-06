import * as React from "react";

const SvgDumbbell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M32 288H16a16 16 0 01-16-16v-32a16 16 0 0116-16h16zm352-64H256v64h128zm240 0h-16v64h16a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M232 32h-48a23.94 23.94 0 00-24 24v400a23.94 23.94 0 0024 24h48a23.94 23.94 0 0024-24V56a23.94 23.94 0 00-24-24zm224 0h-48a23.94 23.94 0 00-24 24v400a23.94 23.94 0 0024 24h48a23.94 23.94 0 0024-24V56a23.94 23.94 0 00-24-24zm128 64h-48a23.94 23.94 0 00-24 24v272a23.94 23.94 0 0024 24h48a23.94 23.94 0 0024-24V120a23.94 23.94 0 00-24-24zm-480 0H56a23.94 23.94 0 00-24 24v272a23.94 23.94 0 0024 24h48a23.94 23.94 0 0024-24V120a23.94 23.94 0 00-24-24z"
      className="dumbbell_svg__fa-primary"
    />
  </svg>
);

SvgDumbbell.displayName = "SvgDumbbell";
SvgDumbbell.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDumbbell;
