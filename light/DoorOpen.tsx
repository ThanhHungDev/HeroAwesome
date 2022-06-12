import * as React from "react";

const SvgDoorOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M288 288c13.25 0 24-14.33 24-32s-10.75-32-24-32-24 14.33-24 32 10.75 32 24 32zm344 192H512V96c0-17.67-14.33-32-32-32h-96V33.18C384 14.42 369.2 0 352.06 0c-2.57 0-5.19.32-7.83 1.01l-192 49.74C137.99 54.44 128 67.7 128 82.92V480H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h624c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM352 33.18V480H160l.26-398.27 191.8-49.69-.06 1.14zM480 480h-96V96h96v384z" />
  </svg>
);

SvgDoorOpen.displayName = "SvgDoorOpen";
SvgDoorOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDoorOpen;
