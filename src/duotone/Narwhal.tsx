import * as React from "react";

const SvgNarwhal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M544 192c-243 0-315.29 224-380.12 224A35.92 35.92 0 01128 380.11v-98l49.75-30.51A32 32 0 00192 225v-81a16 16 0 00-24.88-13.31L96 178.11l-71.12-47.42A16 16 0 000 144v81a32 32 0 0014.25 26.6L64 282.12v98A100 100 0 00163.88 480H576a64 64 0 0064-64V288a96.11 96.11 0 00-96-96zM432 360a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M634.6 33.32a10.48 10.48 0 00-14.25 4.07L535 192l.37.1c2.85-.1 5.73-.1 8.63-.1a95.55 95.55 0 0156.9 18.73l38.83-165.87a10.49 10.49 0 00-5.13-11.54zM432 312a24 24 0 1024 24 24 24 0 00-24-24z"
      className="narwhal_svg__fa-primary"
    />
  </svg>
);

SvgNarwhal.displayName = "SvgNarwhal";
SvgNarwhal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgNarwhal;
