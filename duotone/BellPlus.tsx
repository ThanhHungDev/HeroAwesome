import * as React from "react";

const SvgBellPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M439.39 361.29c-19.32-20.76-55.47-52-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V31a32 32 0 10-64 0v20.84C118.56 67.1 64.08 129.3 64.08 207c0 102.3-36.15 133.53-55.47 154.29A31.24 31.24 0 000 383c.11 16.4 13 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32a31.23 31.23 0 00-8.61-21.71zM320 247a16 16 0 01-16 16h-56v56a16 16 0 01-16 16h-16a16 16 0 01-16-16v-56h-56a16 16 0 01-16-16v-16a16 16 0 0116-16h56v-56a16 16 0 0116-16h16a16 16 0 0116 16v56h56a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M224 511a64 64 0 0064-64H160a64 64 0 0064 64zm80-296h-56v-56a16 16 0 00-16-16h-16a16 16 0 00-16 16v56h-56a16 16 0 00-16 16v16a16 16 0 0016 16h56v56a16 16 0 0016 16h16a16 16 0 0016-16v-56h56a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      className="bell-plus_svg__fa-primary"
    />
  </svg>
);

SvgBellPlus.displayName = "SvgBellPlus";
SvgBellPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellPlus;
