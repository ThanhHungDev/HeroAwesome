import * as React from "react";

const SvgDiceD8 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M225.53 2.52L2.36 233.83a8.45 8.45 0 003.1 13.77l234.13 85.06V8.39a8.19 8.19 0 00-14.06-5.87zm284.11 231.31L286.47 2.52a8.19 8.19 0 00-14.06 5.88v324.27l234.13-85.06a8.46 8.46 0 003.1-13.78z"
      opacity={0.4}
    />
    <path
      d="M469.87 296.61l-197.46 71.68V503.6a8.19 8.19 0 0014.06 5.88l192-199.1c6.12-6.38-.39-16.75-8.6-13.77zM33.53 310.38l192 199.1a8.19 8.19 0 0014.06-5.88V368.29L42.13 296.61c-8.21-2.98-14.72 7.39-8.6 13.77z"
      className="dice-d8_svg__fa-primary"
    />
  </svg>
);

SvgDiceD8.displayName = "SvgDiceD8";
SvgDiceD8.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD8;
