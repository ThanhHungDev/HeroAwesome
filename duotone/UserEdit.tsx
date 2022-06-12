import * as React from "react";

const SvgUserEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M358.9 433.3l-6.8 61a15.92 15.92 0 0017.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7zM633 268.9L595.1 231a24 24 0 00-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8a24.08 24.08 0 000-33.9z"
      opacity={0.4}
    />
    <path
      d="M313.6 288h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h274.9a48 48 0 01-2.6-21.3l6.8-60.9 1.2-11.1 85.2-85.2c-24.5-27.7-60-45.5-99.9-45.5zM224 256A128 128 0 1096 128a128 128 0 00128 128z"
      className="user-edit_svg__fa-primary"
    />
  </svg>
);

SvgUserEdit.displayName = "SvgUserEdit";
SvgUserEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserEdit;
