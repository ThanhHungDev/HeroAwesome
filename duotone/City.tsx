import * as React from "react";

const SvgCity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M116 352H76a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96H76a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96H76a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm128 192h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm320 192h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12z"
      opacity={0.4}
    />
    <path
      d="M616 192H480V24a24 24 0 00-24-24H312a24 24 0 00-24 24v72h-64V16a16 16 0 00-16-16h-16a16 16 0 00-16 16v80h-64V16A16 16 0 0096 0H80a16 16 0 00-16 16v80H24a24 24 0 00-24 24v360a32 32 0 0032 32h576a32 32 0 0032-32V216a24 24 0 00-24-24zM128 404a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm128 192a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm160 96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12V76a12 12 0 0112-12h40a12 12 0 0112 12zm160 288a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12z"
      className="city_svg__fa-primary"
    />
  </svg>
);

SvgCity.displayName = "SvgCity";
SvgCity.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCity;