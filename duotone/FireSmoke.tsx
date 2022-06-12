import * as React from "react";

const SvgFireSmoke = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M195.7 283.2a145 145 0 00-44.5-21.3A171.61 171.61 0 01144 213c0-54.2 54.8-144.1 132-213 30.1 26.9 56.6 55.7 77.9 84a458.59 458.59 0 0144.2-45.4c57 50.8 97.8 133.9 97.8 174.2a171.61 171.61 0 01-7.2 48.9 145 145 0 00-44.5 21.3 160.46 160.46 0 00-36.5-32.8 99.68 99.68 0 00-5.1-77.8c-2.5-4.9-5.3-10.1-8.4-15.4l-43.8 51.7s-68.6-90.7-73.8-96.9c-36.2 45-54.4 71.3-54.4 101.1a103.85 103.85 0 007.4 39.3 161 161 0 00-33.9 31z"
      opacity={0.4}
    />
    <path
      d="M640 400a111.94 111.94 0 01-112 112H112a112 112 0 010-224c37.1 0 69.7 18.3 90.1 46.1a128 128 0 01235.8 0c20.4-27.8 53-46.1 90.1-46.1a111.94 111.94 0 01112 112z"
      className="fire-smoke_svg__fa-primary"
    />
  </svg>
);

SvgFireSmoke.displayName = "SvgFireSmoke";
SvgFireSmoke.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFireSmoke;
