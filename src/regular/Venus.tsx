import * as React from "react";

const SvgVenus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 71.4 51.9 130.6 120 142v58H76c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h44v44c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-44h44c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12h-44v-58c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96z" />
  </svg>
);

SvgVenus.displayName = "SvgVenus";
SvgVenus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVenus;
