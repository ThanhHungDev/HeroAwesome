import * as React from "react";

const SvgStepBackward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M76 480h24c6.6 0 12-5.4 12-12V285l219.5 187.6c20.6 17.2 52.5 2.8 52.5-24.6V64c0-27.4-31.9-41.8-52.5-24.6L112 228.1V44c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v424c0 6.6 5.4 12 12 12zM336 98.5v315.1L149.3 256.5 336 98.5z" />
  </svg>
);

SvgStepBackward.displayName = "SvgStepBackward";
SvgStepBackward.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStepBackward;
