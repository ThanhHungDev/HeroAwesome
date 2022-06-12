import * as React from "react";

const SvgGramophone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M56 320a24 24 0 0013.56-4.2c40.13-27.48 125-77.19 201.19-77.19a144.32 144.32 0 0137.41 4.67A26.79 26.79 0 01328 269.15a34.81 34.81 0 01-34.78 34.77H184a24 24 0 00-24 24v24h133.22A82.87 82.87 0 00376 269.15a74.88 74.88 0 00-55.41-72.26C236.91 174.46 175.43 65 150.84 13.63A24 24 0 00106 17.79l-73.19 272A24 24 0 0056 320zm80.7-231.24c21.79 36.43 50.58 76 86 106.73-46.25 9-91.24 29.2-127.8 49.52zM368 464h-16v-48a32 32 0 00-32-32H64a32 32 0 00-32 32v48H16a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zm-64 0H80v-32h224z" />
  </svg>
);

SvgGramophone.displayName = "SvgGramophone";
SvgGramophone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGramophone;
