import * as React from "react";

const SvgComet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M308.422 263.938l-61.11-8.922-27.351-55.533a13.376 13.376 0 00-24.016 0l-27.353 55.533-61.11 8.922a13.4 13.4 0 00-7.406 22.869l44.262 43.166-10.496 61.012a13.38 13.38 0 0019.416 14.119l54.695-28.81 54.695 28.81a13.386 13.386 0 0019.416-14.12l-10.433-61.011 44.254-43.166a13.43 13.43 0 00-7.463-22.87zM502.35 9.756a32.867 32.867 0 00-33.088-8.296c-28.4 8.5-94.983 29.183-153.252 52.29a38.607 38.607 0 00-53.897-20.294c-42.21 21.998-146.283 79.18-203.46 136.283-78.204 78.195-78.204 205.369 0 283.564a200.555 200.555 0 00283.539 0c57.084-56.994 114.384-161.281 136.38-203.37a38.526 38.526 0 00-20.402-53.9c23.184-58.493 43.805-124.894 52.303-153.187a32.67 32.67 0 00-8.123-33.09zm-71.58 227.975c-23.903 44.793-73.987 133.19-122.477 181.576a152.4 152.4 0 01-215.646 0c-59.395-59.494-59.395-156.188 0-215.682C141.73 154.538 234.4 102.543 274.299 81.25c2.446 8.036 4.291 14.42 10.998 37.386l24.902-10.687c47.584-20.405 107.385-40.2 146.284-52.4-12.217 38.792-31.9 98.396-52.397 146.28l-10.717 24.905c28.233 8.366 31.415 9.332 37.4 10.998z" />
  </svg>
);

SvgComet.displayName = "SvgComet";
SvgComet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComet;