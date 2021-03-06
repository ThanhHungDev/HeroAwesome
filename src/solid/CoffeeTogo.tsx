import * as React from "react";

const SvgCoffeeTogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 64h-16l-23.16-46.31A32 32 0 00364.22 0H83.78a32 32 0 00-28.62 17.69L32 64H16C7.16 64 0 71.16 0 80v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16zM106.78 512h234.44c16.64 0 30.51-12.76 31.89-29.34L400 160H48l26.89 322.66C76.27 499.24 90.14 512 106.78 512zm221-256l-13.34 160H133.56l-13.34-160h207.56z" />
  </svg>
);

SvgCoffeeTogo.displayName = "SvgCoffeeTogo";
SvgCoffeeTogo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffeeTogo;
