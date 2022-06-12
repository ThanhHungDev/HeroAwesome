import * as React from "react";

const SvgRupeeSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M308 80c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v31.659c0 6.627 5.373 12 12 12h93.61c39.065 0 67.203 17.4 79.458 48.341H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h179.59c-3.43 49.738-35.677 80.341-86.615 80.341H12c-6.627 0-12 5.373-12 12v34.974c0 3.495 1.524 6.816 4.173 9.096l182.094 156.685a11.996 11.996 0 007.827 2.904h61.326c11.13 0 16.263-13.837 7.827-21.096L101.818 320h13.31c79.002 0 136.718-54.257 140.65-136H308c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-56.354c-5.067-21.636-14.409-40.497-27.202-56H308z" />
  </svg>
);

SvgRupeeSign.displayName = "SvgRupeeSign";
SvgRupeeSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRupeeSign;
