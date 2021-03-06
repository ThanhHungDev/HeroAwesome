import * as React from "react";

const SvgDirections = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M502.61 233.32L278.68 9.39a32.08 32.08 0 00-45.36 0L9.39 233.32a32.08 32.08 0 000 45.36L233.32 502.6a32.06 32.06 0 0045.35 0l223.94-223.92a32.08 32.08 0 000-45.36zm-101 12.56l-84.21 77.73a8 8 0 01-13.4-5.88V264h-96v64a8 8 0 01-8 8h-32a8 8 0 01-8-8v-80a32 32 0 0132-32h112v-53.73a8 8 0 0113.43-5.88l84.21 77.73a8 8 0 01.44 11.3c-.14.16-.29.31-.45.46z"
      opacity={0.4}
    />
    <path
      d="M401.63 245.88l-84.21 77.73a8 8 0 01-13.42-5.88V264h-96v64a8 8 0 01-8 8h-32a8 8 0 01-8-8v-80a32 32 0 0132-32h112v-53.73a8 8 0 0113.43-5.88l84.21 77.73a8 8 0 01.44 11.3c-.14.16-.29.31-.45.46z"
      className="directions_svg__fa-primary"
    />
  </svg>
);

SvgDirections.displayName = "SvgDirections";
SvgDirections.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDirections;
