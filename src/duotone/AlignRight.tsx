import * as React from "react";

const SvgAlignRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M435.17 32H172.83A12.82 12.82 0 00160 44.83v38.34A12.82 12.82 0 00172.83 96h262.34A12.82 12.82 0 00448 83.17V44.83A12.82 12.82 0 00435.17 32zm0 256H172.83A12.82 12.82 0 00160 300.83v38.34A12.82 12.82 0 00172.83 352h262.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288z"
      opacity={0.4}
    />
    <path
      d="M16 224h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm416 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="align-right_svg__fa-primary"
    />
  </svg>
);

SvgAlignRight.displayName = "SvgAlignRight";
SvgAlignRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignRight;
