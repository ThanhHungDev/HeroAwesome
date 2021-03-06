import * as React from "react";

const SvgFrostyHead = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M357 329.4a165 165 0 00-13.7-41.4H40.4A169.38 169.38 0 0024 360.9c0 59.9 31.3 112.1 78.2 142 10.2 6.5 22.5 9.1 34.6 9.1h109.6a71.86 71.86 0 0041.1-13c51.4-35.8 82.2-99.4 69.5-169.6zm-226.3 33.3a21.3 21.3 0 1121.3-21.3 21.32 21.32 0 01-21.3 21.3zM192 464s-32-46.3-32-64a32 32 0 0164 0c0 17.7-32 64-32 64zm61.3-101.3a21.3 21.3 0 1121.3-21.3 21.32 21.32 0 01-21.3 21.3z"
      opacity={0.4}
    />
    <path
      d="M368 240H16a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zM320 16a16 16 0 00-16-16H80a16 16 0 00-16 16v192h256z"
      className="frosty-head_svg__fa-primary"
    />
  </svg>
);

SvgFrostyHead.displayName = "SvgFrostyHead";
SvgFrostyHead.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFrostyHead;
