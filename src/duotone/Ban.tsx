import * as React from "react";

const SvgBan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M406.78 361.53a186.53 186.53 0 01-45.25 45.25L105.22 150.47a186.53 186.53 0 0145.25-45.25z"
      opacity={0.4}
    />
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm130.11 378.11A184 184 0 11440 256a182.82 182.82 0 01-53.89 130.11z"
      className="ban_svg__fa-primary"
    />
  </svg>
);

SvgBan.displayName = "SvgBan";
SvgBan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBan;
