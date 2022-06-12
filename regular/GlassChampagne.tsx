import * as React from "react";

const SvgGlassChampagne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M200 464h-48V349.5c65-12 111.6-71 103-137.1l-27-185C225.7 11.7 212.2 0 196.3 0H59.7C43.8 0 30.3 11.7 28 27.4L1 212.3c-8.7 66.2 38 125.2 103 137.1V464H56c-22.1 0-40 17.9-40 40 0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40zM73.5 48h109l11.7 80H61.8l11.7-80zm-6.9 228.6c-14.3-16.3-20.7-37-18-57.4l6.3-43.3h146.3l6.2 42.6c2.8 21.1-3.6 41.7-17.9 58.1C174.2 294 151.8 304 128 304s-46.2-10-61.4-27.4z" />
  </svg>
);

SvgGlassChampagne.displayName = "SvgGlassChampagne";
SvgGlassChampagne.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassChampagne;
