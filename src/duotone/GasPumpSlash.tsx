import * as React from "react";

const SvgGasPumpSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M442.3 60.2a16.06 16.06 0 010-22.6l11.3-11.3a16.06 16.06 0 0122.6 0l81 81a64.12 64.12 0 0118.8 45.3V376a71.45 71.45 0 01-7.39 31.7L528 376.3V215.2a55.91 55.91 0 01-48-55.2V97.9zM370 416L96 204.21V416zM160 91.89V64h160v128h-30.47l190.33 147.11A88 88 0 00392 256h-8V64a64.06 64.06 0 00-64-64H160a64.1 64.1 0 00-61 44.72zM400 448H80a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M636.64 480.55L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45z"
      className="gas-pump-slash_svg__fa-primary"
    />
  </svg>
);

SvgGasPumpSlash.displayName = "SvgGasPumpSlash";
SvgGasPumpSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGasPumpSlash;
