import * as React from "react";

const SvgGramophone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M69.56 317.08c62.84-43.05 161.76-94.4 238.6-73.8A26.79 26.79 0 01328 269.15a34.81 34.81 0 01-34.78 34.77H184a24 24 0 00-24 24v24h133.22A82.87 82.87 0 00376 269.15a74.89 74.89 0 00-55.41-72.27C243.17 176.13 183 80.83 150.84 13.62 141.2-6.5 111.76-3.68 106 17.79L32.82 291.06c-5.82 21.62 18.53 38.49 36.74 26.02zM368 448h-16v-32a32 32 0 00-32-32H64a32 32 0 00-32 32v32H16a16 16 0 00-16 16v32a16 16 0 0016 16h352a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
  </svg>
);

SvgGramophone.displayName = "SvgGramophone";
SvgGramophone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGramophone;
