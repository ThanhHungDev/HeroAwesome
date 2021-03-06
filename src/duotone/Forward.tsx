import * as React from "react";

const SvgForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M224 297.69L52.5 440.61C31.9 457.81 0 443.41 0 416V96c0-27.4 31.9-41.7 52.5-24.6L224 214.32z"
      opacity={0.4}
    />
    <path
      d="M500.5 231.41a32.11 32.11 0 010 49.2l-192 160c-20.6 17.2-52.5 2.8-52.5-24.6V96c0-27.4 31.9-41.7 52.5-24.6z"
      className="forward_svg__fa-primary"
    />
  </svg>
);

SvgForward.displayName = "SvgForward";
SvgForward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgForward;
