import * as React from "react";

const SvgGrinTongue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256.06c0 106.32 67 196.73 161 232a95.5 95.5 0 01-9-40v-45.48c-24.7-16.2-43.5-38.1-47.8-63.81a16.06 16.06 0 0120.7-17.9c30.2 9.7 75.1 15.2 123.1 15.2s92.9-5.5 123.1-15.2a16.08 16.08 0 0120.7 17.9c-4.3 25.71-23.1 47.61-47.8 63.81v45.51a95.5 95.5 0 01-9 40c94-35.31 161-125.72 161-232C496 119 385 8 248 8zm-80 232a32 32 0 1132-32 32 32 0 01-32 32zm160 0a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M258.5 392.28l-1.8 7.8c-2.1 9.21-15.2 9.21-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6-.9.4.3-.2-18.9 9.4v63c0 35.21 28 64.51 63.1 64.91a64 64 0 0064.89-63.22V384c-19.5-9.6-18.2-8.9-19-9.3-14.4-6.5-31.1 2.2-34.6 17.6zM200 208a32 32 0 10-32 32 32 32 0 0032-32zm128-32a32 32 0 1032 32 32 32 0 00-32-32z"
      className="grin-tongue_svg__fa-primary"
    />
  </svg>
);

SvgGrinTongue.displayName = "SvgGrinTongue";
SvgGrinTongue.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrinTongue;
