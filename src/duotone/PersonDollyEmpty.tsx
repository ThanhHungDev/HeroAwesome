import * as React from "react";

const SvgPersonDollyEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M80 0h-.1a48.05 48.05 0 10.1 0zm431.74 404.82l-8.2-30.9a8 8 0 00-9.77-5.7l-154.1 41.3a63.57 63.57 0 00-40.9-24.5l-59.4-221.6a8 8 0 00-9.77-5.7l-30.9 8.3a8 8 0 00-5.71 9.77l58.9 220a63.87 63.87 0 10100 60.1L506 414.58a8 8 0 005.74-9.76zM288.73 464a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M0 479.9a32 32 0 0064 0v-74.5C48 391.7.5 350.8 0 350.3zm205.7-256h-39l-33.3-61.8a63.83 63.83 0 00-56.7-34.2H48a48 48 0 00-48 48v103a64.07 64.07 0 0022.4 48.6l76 65.1 14.1 92.5c1 5.7 10.1 30.7 36.8 26.3a32 32 0 0026.3-36.8l-14.1-92.5A64.4 64.4 0 00140 344l-44-37.7V228l32 59.9h94.8z"
      className="person-dolly-empty_svg__fa-primary"
    />
  </svg>
);

SvgPersonDollyEmpty.displayName = "SvgPersonDollyEmpty";
SvgPersonDollyEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPersonDollyEmpty;
