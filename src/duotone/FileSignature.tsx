import * as React from "react";

const SvgFileSignature = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M64 400a16 16 0 0016 16h12.39a43.17 43.17 0 0041-29.53L144 354.59l16.83 50.47c4.45 13.46 23.11 14.87 29.48 2.09l7.69-15.34a10.91 10.91 0 0110-6.19 11.08 11.08 0 0110.17 6.52A43 43 0 00256 416h101l27-27.19v99.31A23.94 23.94 0 01360 512H23.88A23.94 23.94 0 010 488V23.88A23.94 23.94 0 0124 0h232v112a16 16 0 0016 16h112v123.67L288 347v37h-32a11.63 11.63 0 01-9.35-6.5c-11.94-23.86-46.25-30.35-66-14.16l-13.88-41.64a24 24 0 00-45.55 0L103 376.34A11.21 11.21 0 0192.39 384H80a16 16 0 00-16 16z"
      opacity={0.4}
    />
    <path
      d="M384 121.9a23.9 23.9 0 00-7-16.9L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112zM288 347v69h69l161.67-162.78-67.88-67.88zm280.56-179.65l-31.87-31.87a25.48 25.48 0 00-36 0l-27.25 27.25 67.88 67.88 27.25-27.25a25.45 25.45 0 00-.01-36.01z"
      className="file-signature_svg__fa-primary"
    />
  </svg>
);

SvgFileSignature.displayName = "SvgFileSignature";
SvgFileSignature.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileSignature;
