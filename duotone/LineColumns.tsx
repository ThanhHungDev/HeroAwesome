import * as React from "react";

const SvgLineColumns = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M496 288H304a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 128H304a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-256H304a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128H304a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16V48a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M208 288H16a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 128H16a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-384H16A16 16 0 000 48v32a16 16 0 0016 16h192a16 16 0 0016-16V48a16 16 0 00-16-16zm0 128H16a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="line-columns_svg__fa-primary"
    />
  </svg>
);

SvgLineColumns.displayName = "SvgLineColumns";
SvgLineColumns.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLineColumns;
