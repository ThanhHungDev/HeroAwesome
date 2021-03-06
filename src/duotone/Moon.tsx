import * as React from "react";

const SvgMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      d="M32 256C32 114.51 144.29 0 282.64 0a246.91 246.91 0 0145.8 4.28c10.77 2 13.16 16.72 3.67 22.23-61.52 35.76-99.37 102.17-99.37 174.39 0 125.38 111.67 220.61 233.28 197 10.69-2.08 18.24 10.64 11.32 19.35C430.56 476.08 360 512 282.64 512 144.11 512 32 397.31 32 256z"
      className="moon_svg__fa-primary"
    />
  </svg>
);

SvgMoon.displayName = "SvgMoon";
SvgMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoon;
