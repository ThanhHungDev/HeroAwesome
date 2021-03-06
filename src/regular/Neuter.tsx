import * as React from "react";

const SvgNeuter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 71.4 51.9 130.6 120 142v150c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V318c68.1-11.4 120-70.6 120-142zm-144 96c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z" />
  </svg>
);

SvgNeuter.displayName = "SvgNeuter";
SvgNeuter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgNeuter;
