import * as React from "react";

const SvgRaygun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M111.951 151.983a23.997 23.997 0 1024.002 23.996 23.998 23.998 0 00-24.002-23.996zm96.01 0a23.997 23.997 0 1024.002 23.996 23.998 23.998 0 00-24.002-23.996zM320.033 31.997h-16.002a16 16 0 00-16 15.998v27.26a110.463 110.463 0 00-48.066-11.262h-48.006L87.16 1.71a15.999 15.999 0 00-23.154 14.308l-.045 59.19C26.248 93.23 0 131.4 0 175.978c0 55.28 40.148 100.923 92.828 110.055l-70.42 121.918a47.937 47.937 0 0017.596 65.586l55.412 31.996a47.925 47.925 0 0065.602-17.592L281.105 279.93c2.452-.97 4.565-2.516 6.926-3.654v27.687a16 16 0 0016 15.998h16.002a15.998 15.998 0 0016.002-15.998V47.995a15.998 15.998 0 00-16.002-15.998zM119.426 463.973l-55.446-32.02 70.42-121.92 12.746-22.068h73.893zm168.605-246.19a63.611 63.611 0 01-48.066 22.188H111.95a63.992 63.992 0 110-127.984h128.014a63.611 63.611 0 0148.066 22.187zm266.906-98.77l-74.935 24.97h-63.959V79.99a15.998 15.998 0 00-16-15.998h-16.002a16 16 0 00-16.002 15.998v191.976a16 16 0 0016.002 15.998h16.002a15.998 15.998 0 0016-15.998v-63.992h64.076l74.813 24.97A16.002 16.002 0 00576 217.77v-83.582a16 16 0 00-21.063-15.176z" />
  </svg>
);

SvgRaygun.displayName = "SvgRaygun";
SvgRaygun.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRaygun;