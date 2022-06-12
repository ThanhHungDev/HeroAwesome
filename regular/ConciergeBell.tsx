import * as React from "react";

const SvgConciergeBell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 400h-16v-48c0-112.82-83.49-205.89-192-221.46V112h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h48v18.54C115.49 146.11 32 239.18 32 352v48H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-64 0H80v-48c0-97.05 78.95-176 176-176s176 78.95 176 176v48z" />
  </svg>
);

SvgConciergeBell.displayName = "SvgConciergeBell";
SvgConciergeBell.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgConciergeBell;
