import * as React from "react";

const SvgGlassCheers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M605.4 437l-35 13-46-123.4c57-32.2 79.5-103.5 46.8-160.1L484.3 16c-5.9-10.2-16.6-16-27.7-16-4.1 0-8.2.8-12.2 2.4l-120.6 50c-1.4.6-6.1.6-7.5 0l-120.6-50c-4-1.7-8.1-2.4-12.2-2.4-11.1 0-21.9 5.8-27.7 16l-87 150.5c-32.7 56.6-10.2 127.9 46.8 160.1L69.6 450l-35-13c-13.8-5.1-29.1 1.9-34.3 15.7-1 2.8.4 5.8 3.1 6.9l139.9 52.2c2.8 1 5.8-.4 6.9-3.1 5.1-13.8-1.9-29.2-15.7-34.3l-35-13L145.1 339c71.1 18.7 129.8-25.6 144.6-80.7L320 145.8 350.1 258c14.9 55.4 73.8 99.4 144.6 80.7l45.6 122.4-35 13c-13.8 5.1-20.8 20.5-15.7 34.3 1 2.8 4.1 4.2 6.9 3.1l139.9-52.2c2.8-1 4.2-4.1 3.1-6.9-5-13.6-20.3-20.6-34.1-15.4zM259 249.8c-15.8 58.8-77.9 71-117.7 54.5-48.6-20.1-70.6-77-44.7-121.8l25.5-44.2 150.2 62.2-13.3 49.3zm21.6-80.5l-142.4-59L183.4 32 304 82l-23.4 87.3zM336 82l120.6-50 45.2 78.3-142.4 59L336 82zm45 167.8l-13.2-49.3L518 138.3l25.5 44.2c25.9 44.9 3.9 101.7-44.7 121.8C458 321.2 396.4 307 381 249.8z" />
  </svg>
);

SvgGlassCheers.displayName = "SvgGlassCheers";
SvgGlassCheers.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassCheers;
