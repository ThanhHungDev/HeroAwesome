import * as React from "react";

const SvgMace = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M215.92 341.35l-166 166a16 16 0 01-22.63 0l-22.6-22.66a16 16 0 010-22.63l166-166a161.12 161.12 0 0045.23 45.29z"
      opacity={0.4}
    />
    <path
      d="M501 195l-75-23.8a127.4 127.4 0 00-87.67-85.95L313.05 10.8C308.13-3.7 295.59-3.57 291 11l-23.8 75a127.43 127.43 0 00-86 87.67L106.8 199c-14.5 4.92-14.37 17.46.22 22.08l75 23.77a127.43 127.43 0 0087.67 86l25.26 74.44c4.92 14.5 17.46 14.37 22.08-.22l23.77-75a127.4 127.4 0 0085.95-87.67l74.44-25.26c14.51-5.01 14.38-17.55-.19-22.14zm-197 45a32 32 0 1132-32 32 32 0 01-32 32z"
      className="mace_svg__fa-primary"
    />
  </svg>
);

SvgMace.displayName = "SvgMace";
SvgMace.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMace;
