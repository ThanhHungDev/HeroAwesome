import * as React from "react";

const SvgPenFancy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M163.25 249.87l98.88 98.88-33.07 84.07a32 32 0 01-20.24 20.24L32 512l-4.68-4.68 92.89-92.89c2.56.66 5 1.57 7.8 1.57a32 32 0 10-32-32c0 2.77.91 5.24 1.57 7.8L4.69 484.69 0 480l58.94-176.82a32 32 0 0120.24-20.24z"
      opacity={0.4}
    />
    <path
      d="M483.48 142.55L284 325.66l-97.85-97.85 183.1-199.49c74.48-84.26 199.15 39.16 114.23 114.23z"
      className="pen-fancy_svg__fa-primary"
    />
  </svg>
);

SvgPenFancy.displayName = "SvgPenFancy";
SvgPenFancy.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPenFancy;
