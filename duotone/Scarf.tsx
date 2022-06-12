import * as React from "react";

const SvgScarf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509.72 395.71l-117.39-117.1-22.61 22.6L487 418.31a8 8 0 0011.3 0L509.62 407a7.92 7.92 0 00.1-11.29zm-207.89-26.8l-22.61 22.6 117.4 117.2a8 8 0 0011.3 0l11.3-11.3a8 8 0 000-11.3zM166 323.71L47.62 441.91a8 8 0 000 11.3l11.3 11.3a8 8 0 0011.3 0l118.4-118.2zm-45.31-45.1L2.33 396.71a8 8 0 000 11.3l11.29 11.3a8 8 0 0011.3 0l118.41-118.2zM347 323.71l-22.61 22.6 117.41 117.2a8 8 0 0011.29 0l11.3-11.3a8 8 0 000-11.3zM92.92 487.11a8 8 0 000 11.3l11.3 11.3a8 8 0 0011.31 0l118.39-118.2-22.59-22.6z"
      opacity={0.4}
    />
    <path
      d="M279.12 120.51l19.5-19.4a185.4 185.4 0 00-84.4-.2L369.62 256 256.53 369.11l-135.1-140.7c-48.6-53.7-13-113.3-11.5-115.8l43.6-73.1a56.71 56.71 0 0116.8-18c44-29.7 130.7-27.6 171.3-.1a56.71 56.71 0 0116.8 18l43.7 73.4c7.2 12 33.4 65.6-13.2 117.3z"
      className="scarf_svg__fa-primary"
    />
  </svg>
);

SvgScarf.displayName = "SvgScarf";
SvgScarf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScarf;
