import * as React from "react";

const SvgIceCream = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M380.91 129.3C366.57 55.65 301.85 0 224 0S81.43 55.65 67.09 129.3A79.87 79.87 0 0080 288h.94l92.81 192.13A55.56 55.56 0 00224 512c21.47 0 40.72-12.2 50.25-31.86L367.06 288h.94a79.87 79.87 0 0012.91-158.7zM231 459.25c-3.81 7.87-10.25 7.87-14.06 0L134.25 288h179.5zM368 240H80a32 32 0 01-32-32 31.72 31.72 0 0126.83-31.33l33-5.39 6.39-32.82a111.85 111.85 0 01219.58 0l6.39 32.82 33 5.39A31.72 31.72 0 01400 208a32 32 0 01-32 32z" />
  </svg>
);

SvgIceCream.displayName = "SvgIceCream";
SvgIceCream.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIceCream;
