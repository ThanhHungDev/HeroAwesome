import * as React from "react";

const SvgShare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M288 136.08v136c-155.08 2.24-221.93 40.73-176.59 185.75 5 16.09-14.42 28.56-28.08 18.63C39.58 444.64 0 383.78 0 322.34c0-152.23 127.37-184.42 288-186.26z"
      opacity={0.4}
    />
    <path
      d="M506.16 223.7a24 24 0 01-2.47 2.47l-176 152C312.3 391.46 288 380.71 288 360V56c0-20.66 24.28-31.46 39.69-18.16l176 152a24 24 0 012.47 33.86z"
      className="share_svg__fa-primary"
    />
  </svg>
);

SvgShare.displayName = "SvgShare";
SvgShare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShare;
