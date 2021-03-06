import * as React from "react";

const SvgExternalLinkSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 227.33a23.34 23.34 0 01-23.33 23.34h-14.91a23.34 23.34 0 01-23.32-24l1.59-56-205.94 207.42a20 20 0 01-28.33.05l-19.9-19.9a20 20 0 010-28.33L277.31 156l-56 1.59a23.34 23.34 0 01-24-23.32v-14.94A23.34 23.34 0 01220.67 96h132.22A31.11 31.11 0 01384 127.11z"
      opacity={0.4}
    />
    <path
      d="M69.91 361.91L277.31 156l-56 1.59a23.34 23.34 0 01-24-23.32v-14.94A23.34 23.34 0 01220.67 96h132.22A31.11 31.11 0 01384 127.11v132.22a23.34 23.34 0 01-23.33 23.34h-14.91a23.34 23.34 0 01-23.32-24l1.59-56-205.94 207.42a20 20 0 01-28.33.05l-19.9-19.9a20 20 0 01.05-28.33z"
      className="external-link-square_svg__fa-primary"
    />
  </svg>
);

SvgExternalLinkSquare.displayName = "SvgExternalLinkSquare";
SvgExternalLinkSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExternalLinkSquare;
