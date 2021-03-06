import * as React from "react";

const SvgPoo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M451.4 369.1A71.77 71.77 0 00408 240h-14.1A63.74 63.74 0 00352 128h-5.9a94.61 94.61 0 005.9-32 96 96 0 00-96-96 93.1 93.1 0 00-15.1 1.5A79.79 79.79 0 01176 128h-16a63.74 63.74 0 00-41.9 112H104a71.77 71.77 0 00-43.4 129.1A71.9 71.9 0 0072 512h368a71.9 71.9 0 0011.4-142.9zM320 256a32 32 0 11-32 32 32 32 0 0132-32zm-128 0a32 32 0 11-32 32 32 32 0 0132-32zm159.5 139C341 422.9 293 448 256 448s-85-25.1-95.5-53a8.2 8.2 0 017.8-11h175.4a8.2 8.2 0 017.8 11z"
      opacity={0.4}
    />
    <path
      d="M320 256a32 32 0 1032 32 32 32 0 00-32-32zm-128 0a32 32 0 1032 32 32 32 0 00-32-32z"
      className="poo_svg__fa-primary"
    />
  </svg>
);

SvgPoo.displayName = "SvgPoo";
SvgPoo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoo;
