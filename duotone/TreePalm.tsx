import * as React from "react";

const SvgTreePalm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M379.65 485c-2 15.63-16 27-31.71 27h-55.13a31.91 31.91 0 01-32-31.82 31.46 31.46 0 01.94-7.79c14.42-57.12 36.55-167.3 25.86-272L296 192h57.25c14.83 56.66 41.18 179.53 26.4 293z"
      opacity={0.4}
    />
    <path
      d="M607.74 172.86C596.13 111.24 529.38 64 448.76 64c-39.43 0-75.05 11.74-103 30.5C327.15 40.17 265.38 0 191.25 0c-80.62 0-147.36 47.24-159 108.86C30.41 118.79 38.77 128 50 128h54l24-48 33.46 66.92c-3.46 3.08-7.26 5.69-10.64 9.08-57 57-70.82 137.6-35.44 189.38 5.7 8.34 18.12 8.94 26.07 1L296 192h192l24-48 24 48h54c11.25 0 19.61-9.21 17.74-19.14z"
      className="tree-palm_svg__fa-primary"
    />
  </svg>
);

SvgTreePalm.displayName = "SvgTreePalm";
SvgTreePalm.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTreePalm;
