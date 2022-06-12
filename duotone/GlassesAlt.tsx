import * as React from "react";

const SvgGlassesAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M136 272a72 72 0 1072 72 72.08 72.08 0 00-72-72zm304 0a72 72 0 1072 72 72.08 72.08 0 00-72-72z"
      opacity={0.4}
    />
    <path
      d="M560.51 225.9L528.75 98.64C522.05 71.78 495 32 443.33 32c-15.63 0-23 2.94-43 9.6a16 16 0 00-10.12 20.24L395.25 77a16 16 0 0015.18 11c3.54 0 4.82-.74 18.23-5.21 26.07-8.68 48.2 6.13 53.53 27.54L511.86 229A134.81 134.81 0 00440 208c-55.09 0-102.27 32.91-123.65 80h-56.7c-21.38-47.09-68.56-80-123.65-80a134.89 134.89 0 00-71.86 21l29.67-118.72c5.32-21.41 27.46-36.22 53.53-27.54C160.76 87.21 162 88 165.57 88a16 16 0 0015.18-11l5.06-15.18a16 16 0 00-10.12-20.24c-20-6.65-27.39-9.59-43-9.59C81 32 54 71.78 47.25 98.64L15.49 225.9C2.16 279.34 0 300.12 0 344a136 136 0 00136 136c72.37 0 131-56.69 135.19-128h33.61c4.2 71.31 62.82 128 135.2 128a136 136 0 00136-136c0-43.88-2.16-64.66-15.49-118.1zM136 416a72 72 0 1172-72 72.08 72.08 0 01-72 72zm304 0a72 72 0 1172-72 72.08 72.08 0 01-72 72z"
      className="glasses-alt_svg__fa-primary"
    />
  </svg>
);

SvgGlassesAlt.displayName = "SvgGlassesAlt";
SvgGlassesAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassesAlt;
