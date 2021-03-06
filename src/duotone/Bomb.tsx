import * as React from "react";

const SvgBomb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M500 60h-24a12 12 0 000 24h24a12 12 0 000-24zM440 0a12 12 0 00-12 12v24a12 12 0 0024 0V12a12 12 0 00-12-12zm33.9 55l17-17a12 12 0 00-17-17l-17 17a12 12 0 0017 17zm-67.8 0a12 12 0 0017-17l-17-17a12 12 0 00-17 17zm67.8 34a12 12 0 00-17 17l17 17a12 12 0 0017-17zm-102.5 34.5l17.1 17 52-52-17.1-17z"
      opacity={0.4}
    />
    <path
      d="M415 200.9a23.9 23.9 0 000-33.9l-70.1-70a23.9 23.9 0 00-33.9 0l-17.4 17.4A207.35 207.35 0 00208 96C93.1 96 0 189.1 0 304s93.1 207.9 208 207.9 208-93.1 208-208a207.35 207.35 0 00-18.4-85.6zM176 208a64.06 64.06 0 00-64 64 16 16 0 01-32 0 96.15 96.15 0 0196-96 16 16 0 010 32z"
      className="bomb_svg__fa-primary"
    />
  </svg>
);

SvgBomb.displayName = "SvgBomb";
SvgBomb.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBomb;
