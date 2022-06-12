import * as React from "react";

const SvgTruckLoading = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M640 48V0H384c-17.7 0-32 14.3-32 32v340.6L5.9 465.4c-4.3 1.1-6.8 5.5-5.7 9.8l8.3 30.9c1.1 4.3 5.5 6.8 9.8 5.7L416.5 405c2.7 59.5 51.4 107 111.5 107 61.9 0 112-50.1 112-112s-50.1-112-112-112c-44.6 0-82.8 26.3-100.8 64H400V48h240zM528 336c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM50.2 375.6c2.3 8.5 11.1 13.6 19.6 11.3l216.4-58c8.5-2.3 13.6-11.1 11.3-19.6l-49.7-185.5c-2.3-8.5-11.1-13.6-19.6-11.3L151 133.3l24.8 92.7-61.8 16.5-24.8-92.7-77.3 20.7C3.4 172.8-1.7 181.6.6 190.1l49.6 185.5z" />
  </svg>
);

SvgTruckLoading.displayName = "SvgTruckLoading";
SvgTruckLoading.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTruckLoading;
