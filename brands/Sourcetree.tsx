import * as React from "react";

const SvgSourcetree = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 00161.5 396v101.7a14.3 14.3 0 0014.3 14.3h96.4a14.3 14.3 0 0014.3-14.3V396.1A203.18 203.18 0 00427.2 203zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z" />
  </svg>
);

SvgSourcetree.displayName = "SvgSourcetree";
SvgSourcetree.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSourcetree;
