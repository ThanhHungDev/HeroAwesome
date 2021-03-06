import * as React from "react";

const SvgBookmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z" />
  </svg>
);

SvgBookmark.displayName = "SvgBookmark";
SvgBookmark.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookmark;
