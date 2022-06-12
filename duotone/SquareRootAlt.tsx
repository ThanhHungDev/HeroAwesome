import * as React from "react";

const SvgSquareRootAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M576 72a24 24 0 01-24 24H357l-97.78 374.52C249.38 503 222.21 512 204.94 512c-18.64 0-35.95-8.5-48.44-28.27L67.62 320H24a24 24 0 01-24-24v-48a24 24 0 0124-24h81.47a32 32 0 0128 16.57l58.41 106.1 84.82-322.8A32 32 0 01307.65 0H552a24 24 0 0124 24z"
      opacity={0.4}
    />
    <path
      d="M571.31 366.06a16 16 0 010 22.63l-22.62 22.62a16 16 0 01-22.63 0L480 365.25l-46.06 46.06a16 16 0 01-22.63 0l-22.62-22.62a16 16 0 010-22.63L434.75 320l-46.06-46.06a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0L480 274.75l46.06-46.06a16 16 0 0122.63 0l22.62 22.62a16 16 0 010 22.63L525.25 320z"
      className="square-root-alt_svg__fa-primary"
    />
  </svg>
);

SvgSquareRootAlt.displayName = "SvgSquareRootAlt";
SvgSquareRootAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSquareRootAlt;
