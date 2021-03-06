import * as React from "react";

const SvgSkating = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 448a16 16 0 00-16 16 16 16 0 01-16 16h-96a16 16 0 000 32h96a48 48 0 0048-48 16 16 0 00-16-16zm-282.2 8.6a16 16 0 01-22.6 0l-67.9-67.9a16 16 0 10-22.6 22.6l67.9 67.9a48.16 48.16 0 0067.9 0 16 16 0 10-22.7-22.6zM400 0a48 48 0 1048 48 48 48 0 00-48-48z"
      opacity={0.4}
    />
    <path
      d="M360.85 164.3a40 40 0 00-28.3-68.3H128a32 32 0 100 64h105.5l-20.1 17.2a63.94 63.94 0 00-3.6 93.8l78.2 78.2V432a32 32 0 0064 0v-89.4a48 48 0 00-14.1-33.9l-61-61a16.29 16.29 0 001.7-1.1zm-187 112.5l-93.7 93.7a32 32 0 0022.6 54.6 31.55 31.55 0 0022.6-9.4l91.9-91.9-30.2-30.2a94 94 0 01-13.2-16.8z"
      className="skating_svg__fa-primary"
    />
  </svg>
);

SvgSkating.displayName = "SvgSkating";
SvgSkating.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkating;
