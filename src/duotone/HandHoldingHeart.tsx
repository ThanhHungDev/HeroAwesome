import * as React from "react";

const SvgHandHoldingHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M564 377L412.8 498a64.08 64.08 0 01-40 14H16a16 16 0 01-16-16v-96a16 16 0 0116-16h55.4l46.5-37.7A117.69 117.69 0 01192 320h160a32 32 0 0131.6 37.4c-2.6 15.7-17.4 26.6-33.3 26.6H272a16 16 0 000 32h118.3a63.67 63.67 0 0040-14l92.4-73.9c12.4-10 30.8-10.7 42.6 0A32 32 0 01564 377z"
      opacity={0.4}
    />
    <path
      d="M404.1 17.52c35.4 30.6 37.2 85.6 5.6 118.8l-108.9 114.2a17.42 17.42 0 01-25.5 0l-108.9-114.2c-31.6-33.2-29.7-88.2 5.6-118.8 30.8-26.7 76.7-21.9 104.9 7.8l11.1 11.6 11.2-11.7c28.2-29.6 74.1-34.4 104.9-7.7z"
      className="hand-holding-heart_svg__fa-primary"
    />
  </svg>
);

SvgHandHoldingHeart.displayName = "SvgHandHoldingHeart";
SvgHandHoldingHeart.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHoldingHeart;
