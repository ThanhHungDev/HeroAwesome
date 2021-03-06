import * as React from "react";

const SvgMercury = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path d="M143 288a80 80 0 1180-80 80 80 0 01-80 80z" opacity={0.4} />
    <path
      d="M287 208a143.64 143.64 0 00-51.2-110.1c2.5-1.8 4.9-3.8 7.2-5.8 24.7-21.2 39.8-48.8 43.2-78.8A11.89 11.89 0 00275.83.08a12.79 12.79 0 00-1.52-.08h-40.5A12 12 0 00222 9.8c-2.4 12.5-9.6 24.3-20.69 33.8C186 56.8 165.32 64 143 64s-43-7.2-58.4-20.4C73.5 34.1 66.4 22.3 63.9 9.8A12 12 0 0052.23 0h-40.5a11.88 11.88 0 00-12 11.76 13.08 13.08 0 00.09 1.54C3.23 43.4 18.23 71 43 92.2c2.3 2 4.7 3.9 7.2 5.8A143.9 143.9 0 00111 348.4V400H75a12 12 0 00-12 12v40a12 12 0 0012 12h36v36a12 12 0 0012 12h40a12 12 0 0012-12v-36h36a12 12 0 0012-12v-40a12 12 0 00-12-12h-36v-51.6A144 144 0 00287 208zm-144 80a80 80 0 1180-80 80 80 0 01-80 80z"
      className="mercury_svg__fa-primary"
    />
  </svg>
);

SvgMercury.displayName = "SvgMercury";
SvgMercury.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMercury;
