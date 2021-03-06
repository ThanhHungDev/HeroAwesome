import * as React from "react";

const SvgTvRetro = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M392 168.07s0-8-168-8c-152 0-152 8-152 8s-8 0-8 120 8 120 8 120 0 8 152 8c168 0 168-8 168-8s8 0 8-120-8-120-8-120zM173.14 96h165.72l35.64-41.32a32 32 0 10-45.3-45.3L256 94.27 182.8 9.48a32 32 0 00-45.3 45.29z"
      opacity={0.4}
    />
    <path
      d="M464 96.07H48a48 48 0 00-48 48v288a48 48 0 0048 48h16v32h48l21.3-32h245.3l21.3 32h48v-32h16a48 48 0 0048-48v-288a47.86 47.86 0 00-47.9-48zm-72 312s0 8-168 8c-152 0-152-8-152-8s-8 0-8-120 8-120 8-120 0-8 152-8c168 0 168 8 168 8s8 0 8 120-8 120-8 120zm72-100a12 12 0 01-12 12h-8a12 12 0 01-12-12v-8a12 12 0 0112-12h8a12 12 0 0112 12zm0-64a12 12 0 01-12 12h-8a12 12 0 01-12-12v-8a12 12 0 0112-12h8a12 12 0 0112 12z"
      className="tv-retro_svg__fa-primary"
    />
  </svg>
);

SvgTvRetro.displayName = "SvgTvRetro";
SvgTvRetro.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTvRetro;
