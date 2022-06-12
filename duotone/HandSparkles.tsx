import * as React from "react";

const SvgHandSparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M512 112a32.1 32.1 0 00-32 32v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64a32 32 0 00-64 0v152a8 8 0 01-8 8h-16a8 8 0 01-8-8V32a32 32 0 00-64 0v184a8 8 0 01-8 8h-16a8 8 0 01-8-8V64a32 32 0 00-64 0v241l-23.59-32.49a40 40 0 00-64.71 47.09l125.6 172.61A48.07 48.07 0 00268.09 512H465.7c19.24 0 35.65-11.73 43.24-28.79l-.07-.17-37.49-15.63-1-.42-1-.5a38.67 38.67 0 010-69.14l1-.49 1-.43 37.49-15.63 15.63-37.48.41-1 .47-.95c3.85-7.74 10.58-13.63 18.35-17.34 0-1.33.25-2.69.27-4V144a32.1 32.1 0 00-32-32zM349.79 339.52L320 351.93l-12.42 29.78a4 4 0 01-7.15 0L288 351.93l-29.79-12.41a4 4 0 010-7.16L288 319.94l12.42-29.78a4 4 0 017.15 0L320 319.94l29.79 12.42a4 4 0 010 7.16z"
      opacity={0.4}
    />
    <path
      d="M156.3 138l-49.57-20.67h-.07L86 67.68a6.66 6.66 0 00-11.92 0l-20.7 49.63h-.05L3.7 138a7.29 7.29 0 00-3.7 6 7.32 7.32 0 003.68 6l49.59 20.6h.07L74 220.26a6.65 6.65 0 0011.92 0l20.69-49.62h.09l49.55-20.65a7.32 7.32 0 003.68-6 7.29 7.29 0 00-3.63-5.99zM640 431.91a7.28 7.28 0 00-3.68-6l-49.57-20.67h-.07L566 355.63a6.66 6.66 0 00-11.92 0l-20.7 49.63h-.05L483.7 426a7.28 7.28 0 00-3.68 6 7.29 7.29 0 003.68 5.95l49.57 20.67h.07L554 508.21a6.65 6.65 0 0011.92 0l20.69-49.62h.09l49.55-20.66a7.29 7.29 0 003.68-5.95z"
      className="hand-sparkles_svg__fa-primary"
    />
  </svg>
);

SvgHandSparkles.displayName = "SvgHandSparkles";
SvgHandSparkles.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandSparkles;