import * as React from "react";

const SvgFileImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-271.46 48a48 48 0 11-48 48 48 48 0 0148-48zm208 240h-256l.46-48.48L104.51 328c4.69-4.69 11.8-4.2 16.49.48L160.54 368 264 264.48a12 12 0 0117 0L320.54 304z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM112.54 272a48 48 0 10-48-48 48 48 0 0048 48zM264 264.45L160.54 368 121 328.48c-4.69-4.68-11.8-5.17-16.49-.48L65 367.52 64.54 416h256V304L281 264.48a12 12 0 00-17-.03z"
      className="file-image_svg__fa-primary"
    />
  </svg>
);

SvgFileImage.displayName = "SvgFileImage";
SvgFileImage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileImage;
