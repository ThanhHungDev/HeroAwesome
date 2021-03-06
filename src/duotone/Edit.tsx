import * as React from "react";

const SvgEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M564.6 60.2l-48.8-48.8a39.11 39.11 0 00-55.2 0l-35.4 35.4a9.78 9.78 0 000 13.8l90.2 90.2a9.78 9.78 0 0013.8 0l35.4-35.4a39.11 39.11 0 000-55.2zM427.5 297.6l-40 40a12.3 12.3 0 00-3.5 8.5v101.8H64v-320h229.8a12.3 12.3 0 008.5-3.5l40-40a12 12 0 00-8.5-20.5H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V306.1a12 12 0 00-20.5-8.5z"
      opacity={0.4}
    />
    <path
      d="M492.8 173.3a9.78 9.78 0 010 13.8L274.4 405.5l-92.8 10.3a19.45 19.45 0 01-21.5-21.5l10.3-92.8L388.8 83.1a9.78 9.78 0 0113.8 0z"
      className="edit_svg__fa-primary"
    />
  </svg>
);

SvgEdit.displayName = "SvgEdit";
SvgEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEdit;
