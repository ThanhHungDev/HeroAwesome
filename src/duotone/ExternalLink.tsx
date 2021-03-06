import * as React from "react";

const SvgExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M400 320h32a16 16 0 0116 16v128a48 48 0 01-48 48H48a48 48 0 01-48-48V112a48 48 0 0148-48h160a16 16 0 0116 16v32a16 16 0 01-16 16H64v320h320V336a16 16 0 0116-16z"
      opacity={0.4}
    />
    <path
      d="M484 224h-17.88a28 28 0 01-28-28v-.78L440 128 192.91 376.91A24 24 0 01159 377l-.06-.06L135 353.09a24 24 0 010-33.94l.06-.06L384 72l-67.21 1.9A28 28 0 01288 46.68V28a28 28 0 0128-28h158.67A37.33 37.33 0 01512 37.33V196a28 28 0 01-28 28z"
      className="external-link_svg__fa-primary"
    />
  </svg>
);

SvgExternalLink.displayName = "SvgExternalLink";
SvgExternalLink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExternalLink;
