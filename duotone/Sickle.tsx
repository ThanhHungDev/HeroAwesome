import * as React from "react";

const SvgSickle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M203.37 382.05a16 16 0 010 22.63l-22.62 22.62a16 16 0 01-22.62 0l-2.74-2.74-82.76 82.75a16 16 0 01-22.62 0L4.69 462.06a16 16 0 010-22.63l82.74-82.74-2.74-2.75a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0l73.43 73.36z"
      opacity={0.4}
    />
    <path
      d="M511.82 155.39c1.65 8.41-9.06 13.38-14.14 6.48a148.08 148.08 0 00-47.33-41.42c-44.47-24.9-101-23.24-144 4-70.76 44.73-85.41 131.8-46.88 196L224 355.87l-31.71-30.09c-45.7-45.69-70.15-111.2-56.41-174.34C153.75 69.31 224 0 320 0c128 0 181.17 100.72 191.82 155.39z"
      className="sickle_svg__fa-primary"
    />
  </svg>
);

SvgSickle.displayName = "SvgSickle";
SvgSickle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSickle;
