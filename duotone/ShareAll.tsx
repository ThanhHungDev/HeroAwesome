import * as React from "react";

const SvgShareAll = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M567.69 226.16l-176 152C376.3 391.44 352 380.69 352 360v-15.83l108.61-93.79a56 56 0 000-84.76L352 71.83V56c0-20.66 24.28-31.46 39.69-18.16l176 152a24 24 0 010 36.32z"
      opacity={0.4}
    />
    <path
      d="M439.69 226.16l-176 152C248.3 391.44 224 380.69 224 360v-84.19c-108.67 12.53-151.1 58.85-112.59 182 5 16.09-14.42 28.56-28.08 18.63C39.58 444.63 0 383.77 0 322.33 0 191 94.82 149 224 138.78V56c0-20.66 24.28-31.46 39.69-18.16l176 152a24 24 0 010 36.32z"
      className="share-all_svg__fa-primary"
    />
  </svg>
);

SvgShareAll.displayName = "SvgShareAll";
SvgShareAll.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShareAll;
