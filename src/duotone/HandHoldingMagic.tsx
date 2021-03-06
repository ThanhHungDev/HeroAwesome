import * as React from "react";

const SvgHandHoldingMagic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M564 377L412.75 498a64 64 0 01-40 14H16a16 16 0 01-16-16v-96a16 16 0 0116-16h55.44l46.5-37.73A117.51 117.51 0 01192 320h160a32 32 0 0131.56 37.37C381 373.11 366.22 384 350.28 384H272a16 16 0 000 32h118.33a64 64 0 0040-14l92.34-73.87c12.45-10 30.8-10.69 42.63 0A32 32 0 01564 377z"
      opacity={0.4}
    />
    <path
      d="M384 128V96a32 32 0 00-32-32H224a32 32 0 00-32 32v32c0 14.5 14.28 32 32 32 64 0 96-32 96-32a96.1 96.1 0 01-96 96c-51.14 0-96-44.86-96-96V96a96.1 96.1 0 0196-96h128a96.1 96.1 0 0196 96v33.56c-.6 76.16-65.13 137.07-142.18 141.43L288 272l53.91-53.2C366.49 194.54 384 162.3 384 128z"
      className="hand-holding-magic_svg__fa-primary"
    />
  </svg>
);

SvgHandHoldingMagic.displayName = "SvgHandHoldingMagic";
SvgHandHoldingMagic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHoldingMagic;
