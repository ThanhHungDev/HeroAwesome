import * as React from "react";

const SvgBone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M598.88 244.56a12.79 12.79 0 000 22.88A74.38 74.38 0 01640 334v7.64a74.38 74.38 0 01-145 23.5c-6.53-19.6-10.73-45.14-38.11-45.14H183.06c-26.51 0-30.43 22.11-38.11 45.14A74.38 74.38 0 010 341.61V334a74.39 74.39 0 0141.12-66.53 12.79 12.79 0 000-22.88A74.39 74.39 0 010 178v-7.64a74.38 74.38 0 01145-23.53c6.53 19.6 10.73 45.14 38.11 45.14h273.82c26.51 0 30.43-22.11 38.11-45.14a74.39 74.39 0 01145 23.53V178a74.39 74.39 0 01-41.12 66.53z"
      opacity={0.4}
    />
  </svg>
);

SvgBone.displayName = "SvgBone";
SvgBone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBone;
