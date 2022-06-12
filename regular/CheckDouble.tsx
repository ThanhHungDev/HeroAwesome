import * as React from "react";

const SvgCheckDouble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M444.09 166.99l-27.39-28.37c-2.6-1.96-5.53-2.93-8.8-2.93-3.27 0-5.87.98-7.82 2.93L142.81 396.86l-94.88-94.88c-1.96-2.61-4.55-3.91-7.82-3.91-3.27 0-6.21 1.3-8.8 3.91l-27.4 27.38c-2.6 2.61-3.91 5.55-3.91 8.8s1.31 5.87 3.91 7.82l130.1 131.07c2.6 1.96 5.53 2.94 8.8 2.94 3.27 0 5.87-.98 7.82-2.94L444.08 183.6c2.6-2.61 3.91-5.55 3.91-8.8.01-3.24-1.3-5.86-3.9-7.81zM131.88 285.04c2.62 1.97 5.58 2.96 8.88 2.96s5.92-.99 7.89-2.96L353.34 80.35c2.62-2.64 3.95-5.6 3.95-8.88 0-3.28-1.33-5.92-3.95-7.89l-27.63-28.62c-2.62-1.97-5.58-2.96-8.88-2.96s-5.92.99-7.89 2.96L140.76 204.12l-60.41-60.41c-1.97-2.64-4.59-3.95-7.89-3.95s-6.26 1.31-8.88 3.95l-27.63 27.63c-2.62 2.64-3.95 5.6-3.95 8.88 0 3.29 1.33 5.92 3.95 7.89l95.93 96.93z" />
  </svg>
);

SvgCheckDouble.displayName = "SvgCheckDouble";
SvgCheckDouble.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheckDouble;
