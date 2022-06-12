import * as React from "react";

const SvgPoundSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M308 360h-30.284c-6.627 0-12 5.373-12 12v56.835H112V280h100c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12H112v-77.081c0-37.438 26.786-67.388 72.958-67.388 25.94 0 48.692 11.882 60.552 19.451 5.141 3.28 11.923 2.156 15.758-2.586l19.658-24.305c4.35-5.378 3.262-13.296-2.365-17.32C262.736 51.456 229.027 32 184.334 32 105.716 32 48 83.164 48 152.423V232H20c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h28v148.835H12c-6.627 0-12 5.373-12 12V468c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12z" />
  </svg>
);

SvgPoundSign.displayName = "SvgPoundSign";
SvgPoundSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoundSign;
