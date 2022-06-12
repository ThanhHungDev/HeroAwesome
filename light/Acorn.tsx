import * as React from "react";

const SvgAcorn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M352 64H241.12c3.32-14.4 9.75-27.88 19.46-39.28 2.77-3.25 2.81-7.98-.21-11L249.04 2.39c-3.22-3.22-8.62-3.23-11.62.2-15.38 17.51-25.27 38.67-29.1 61.41H96c-53.02 0-96 42.98-96 96v32c0 17.67 14.33 32 32 32v32c0 98.06 55.4 187.7 143.11 231.55L224 512l48.89-24.45C360.6 443.7 416 354.06 416 256v-32c17.67 0 32-14.33 32-32v-32c0-53.02-42.98-96-96-96zm32 192c0 86.49-48.06 164.25-125.42 202.93L224 476.22l-34.58-17.29C112.06 420.25 64 342.49 64 256v-32h320v32zm32-64H32v-32c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64v32z" />
  </svg>
);

SvgAcorn.displayName = "SvgAcorn";
SvgAcorn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAcorn;