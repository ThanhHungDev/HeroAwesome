import * as React from "react";

const SvgHeadSideBrain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509.21 275c-20.94-47.12-48.44-151.73-73.08-186.75A208 208 0 00266.09 0H192C86 0 0 86 0 192a191.28 191.28 0 0064 142.82V512h256v-64h64a64 64 0 0064-64v-64h32a32 32 0 0029.21-45zM336 208h-50.94a47.5 47.5 0 012.94 16 48 48 0 01-48 48 47.5 47.5 0 01-16-2.94V320h-64v-50.94a47.5 47.5 0 01-16 2.94 48 48 0 01-48-48c0-1 .23-1.89.29-2.85A47.88 47.88 0 01112 128a48 48 0 0148-48 47.43 47.43 0 0123.53 6.4 47.76 47.76 0 0180.94 0 47.38 47.38 0 0168.59 25.6H336a48 48 0 010 96z"
      opacity={0.4}
    />
    <path
      d="M66.61 160.29A47.89 47.89 0 01112 128a48 48 0 0148-48 47.43 47.43 0 0123.53 6.4 47.76 47.76 0 0180.94 0 47.38 47.38 0 0168.59 25.6H336a48 48 0 010 96h-50.94a47.5 47.5 0 012.94 16 48 48 0 01-48 48 47.5 47.5 0 01-16-2.94V320h-64v-50.94a47.5 47.5 0 01-16 2.94 48 48 0 01-48-48c0-1 .23-1.89.29-2.85a47.88 47.88 0 01-29.68-60.86z"
      className="head-side-brain_svg__fa-primary"
    />
  </svg>
);

SvgHeadSideBrain.displayName = "SvgHeadSideBrain";
SvgHeadSideBrain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideBrain;
