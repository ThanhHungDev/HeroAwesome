import * as React from "react";

const SvgHorizontalRule = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 240.13v31.74A16 16 0 01624.13 288H15.87A16 16 0 010 271.87v-31.74A16 16 0 0115.87 224h608.26A16 16 0 01640 240.13z"
      opacity={0.4}
    />
  </svg>
);

SvgHorizontalRule.displayName = "SvgHorizontalRule";
SvgHorizontalRule.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorizontalRule;
