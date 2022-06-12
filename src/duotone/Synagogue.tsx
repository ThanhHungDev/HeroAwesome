import * as React from "react";

const SvgSynagogue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M70 196.51L6.67 268.29A26.66 26.66 0 000 285.93V512h128V239.58l-38-43.07a13.35 13.35 0 00-20 0zm563.33 71.78L570 196.51a13.33 13.33 0 00-20 0l-38 43.07V512h128V285.93a26.64 26.64 0 00-6.67-17.64z"
      opacity={0.4}
    />
    <path
      d="M468 109.41L340 7a32 32 0 00-40 0L172 109.41a32 32 0 00-12 25V512h96v-92.57c0-31.88 21.78-61.43 53.25-66.55A64 64 0 01384 416v96h96V134.4a32 32 0 00-12-24.99zm-75.94 113.15a4.73 4.73 0 01-4 7.24h-38.94l-25.12 40a4.72 4.72 0 01-8 0l-25.12-40h-38.94a4.72 4.72 0 01-4-7.24l19.2-30.56-19.2-30.56a4.73 4.73 0 014-7.24h38.94l25.12-40a4.72 4.72 0 018 0l25.12 40h38.95a4.73 4.73 0 014 7.24L372.87 192z"
      className="synagogue_svg__fa-primary"
    />
  </svg>
);

SvgSynagogue.displayName = "SvgSynagogue";
SvgSynagogue.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSynagogue;