import * as React from "react";

const SvgTablets = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 0c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160S568.4 0 480 0zm0 288c-70.7 0-128-57.3-128-128 0-29.6 10.4-56.4 27.3-78.1l178.9 178.9C536.4 277.6 509.6 288 480 288zm100.7-49.9L401.9 59.3C423.6 42.4 450.4 32 480 32c70.7 0 128 57.3 128 128 0 29.6-10.4 56.4-27.3 78.1zM160 192C71.6 192 0 263.6 0 352s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 288c-65.2 0-118.4-48.9-126.4-112h252.8c-8 63.1-61.2 112-126.4 112zM33.6 336c8-63.1 61.2-112 126.4-112s118.4 48.9 126.4 112H33.6z" />
  </svg>
);

SvgTablets.displayName = "SvgTablets";
SvgTablets.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTablets;
