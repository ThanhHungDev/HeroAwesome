import * as React from "react";

const SvgStream = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M16 128h416c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v32c0 8.84 7.16 16 16 16zm480 96H80c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-64 160H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
  </svg>
);

SvgStream.displayName = "SvgStream";
SvgStream.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStream;
