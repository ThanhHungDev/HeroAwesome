import * as React from "react";

const SvgUnlink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M264.49 366.31a12 12 0 00-17 0L202.84 411A72 72 0 01101 309.16l44.67-44.67a12 12 0 000-17l-39.6-39.6a12 12 0 00-17 0l-44.62 44.7c-59.27 59.27-59.27 155.7 0 215s155.7 59.26 215 0l44.67-44.67a12 12 0 000-17zM467.55 44.45c-59.26-59.27-155.69-59.27-215 0l-44.63 44.67a12 12 0 000 17l39.6 39.6a12 12 0 0017 0L309.16 101A72 72 0 11411 202.84l-44.67 44.67a12 12 0 000 17l39.6 39.59a12 12 0 0017 0l44.67-44.67c59.22-59.29 59.22-155.72-.05-214.98z"
      opacity={0.4}
    />
    <path
      d="M63.6 7L505 448.4a24 24 0 010 33.94L482.34 505a24 24 0 01-33.94 0L7 63.6a24 24 0 010-33.94L29.66 7A24 24 0 0163.6 7z"
      className="unlink_svg__fa-primary"
    />
  </svg>
);

SvgUnlink.displayName = "SvgUnlink";
SvgUnlink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUnlink;
