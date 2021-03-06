import * as React from "react";

const SvgHippo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M581.12 96.2c-27.67-.15-52.5 17.58-76.6 26.62A96 96 0 00416 64a95 95 0 00-32 5.88V56a24 24 0 00-24-24h-16a24 24 0 00-24 24v49c-34-25.4-78.76-41-128-41C86 64 0 135.64 0 224v240a16 16 0 0016 16h64a16 16 0 0016-16v-70.79C128.35 407.57 166.72 416 208 416s79.65-8.43 112-22.79V464a16 16 0 0016 16h64a16 16 0 0016-16V288h192a32 32 0 0032-32v-92c0-34.11-24.79-67.61-58.88-67.8zM448 176a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M544 288v16a16 16 0 0016 16h32a16 16 0 0016-16v-16zm-96-144a16 16 0 1016 16 16 16 0 00-16-16z"
      className="hippo_svg__fa-primary"
    />
  </svg>
);

SvgHippo.displayName = "SvgHippo";
SvgHippo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHippo;
