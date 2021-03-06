import * as React from "react";

const SvgUfo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M496 240c0 3.146-.305 6.215-.469 9.322C441.945 273.66 382.797 288 320 288s-121.945-14.34-175.531-38.678c-.164-3.107-.469-6.176-.469-9.322a176 176 0 01352 0z"
      opacity={0.4}
    />
    <path
      d="M493.652 212.582A176.665 176.665 0 01496 240c0 3.146-.305 6.215-.469 9.322C441.945 273.66 382.797 288 320 288s-121.945-14.34-175.531-38.678c-.164-3.107-.469-6.176-.469-9.322a176.665 176.665 0 012.348-27.418C58.355 235.391 0 274.936 0 320c0 70.691 143.27 128 320 128s320-57.309 320-128c0-45.064-58.355-84.61-146.348-107.418zM128 360a24 24 0 1124-24 24.001 24.001 0 01-24 24zm192 32a24 24 0 1124-24 24.001 24.001 0 01-24 24zm192-32a24 24 0 1124-24 24.001 24.001 0 01-24 24z"
      className="ufo_svg__fa-primary"
    />
  </svg>
);

SvgUfo.displayName = "SvgUfo";
SvgUfo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUfo;
