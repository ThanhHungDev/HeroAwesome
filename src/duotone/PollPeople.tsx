import * as React from "react";

const SvgPollPeople = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M616.12 32H248a23.94 23.94 0 00-24 23.88V168a23.94 23.94 0 0023.88 24H616a23.94 23.94 0 0024-23.88V56a23.94 23.94 0 00-23.88-24zM576 128H288V96h288zm40.12 192H248a23.94 23.94 0 00-24 23.88V456a23.94 23.94 0 0023.88 24H616a23.94 23.94 0 0024-23.88V344a23.94 23.94 0 00-23.88-24zM576 416H288v-32h288z"
      opacity={0.4}
    />
    <path
      d="M96 416H64a64.06 64.06 0 00-64 64v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a64.06 64.06 0 00-64-64zM80 96a48 48 0 10-48-48 48 48 0 0048 48zm48 240a48 48 0 10-48 48 48 48 0 0048-48zM288 96v32h224V96zm0 320h128v-32H288zM96 128H64a64.06 64.06 0 00-64 64v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a64.06 64.06 0 00-64-64z"
      className="poll-people_svg__fa-primary"
    />
  </svg>
);

SvgPollPeople.displayName = "SvgPollPeople";
SvgPollPeople.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPollPeople;
