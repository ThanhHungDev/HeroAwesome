import * as React from "react";

const SvgSpeakers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M176 224a111.51 111.51 0 0180 33.78V48a79.24 79.24 0 0116.41-48H48A48 48 0 000 48v416a48 48 0 0048 48h224.41A79.24 79.24 0 01256 464v-49.78A112 112 0 11176 224zm0-160a48 48 0 11-48 48 48 48 0 0148-48zM592 0H336a48 48 0 00-48 48v416a48 48 0 0048 48h256a48 48 0 0048-48V48a48 48 0 00-48-48zM464 64a48 48 0 11-48 48 48 48 0 0148-48zm0 384a112 112 0 11112-112 112 112 0 01-112 112z"
      opacity={0.4}
    />
    <path
      d="M64 336a111.89 111.89 0 00192 78.22V257.78A111.89 111.89 0 0064 336zm176 0a64 64 0 11-64-64 64 64 0 0164 64zm224-112a112 112 0 10112 112 112 112 0 00-112-112zm0 176a64 64 0 1164-64 64 64 0 01-64 64zm0-240a48 48 0 10-48-48 48 48 0 0048 48zm-288 0a48 48 0 10-48-48 48 48 0 0048 48z"
      className="speakers_svg__fa-primary"
    />
  </svg>
);

SvgSpeakers.displayName = "SvgSpeakers";
SvgSpeakers.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpeakers;
