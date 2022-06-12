import * as React from "react";

const SvgRunning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 416 512" {...props}>
    <path d="M272 96a48 48 0 1148-48 48 48 0 01-48 48z" opacity={0.4} />
    <path
      d="M384 223.81h-44l-26.06-53.2c-12.5-25.53-35.45-44.2-61.78-50.9l-71.11-21.13a95.65 95.65 0 00-80.84 17.12l-39.67 30.39A32 32 0 1099.3 197l.18-.13 39.69-30.39c7.67-5.88 17.44-8 25.27-6.13l14.7 4.36L141.68 252A64.09 64.09 0 00168 332.23l85 50.13L225.53 470a32 32 0 0060.79 20c.1-.3.19-.6.28-.9l31.6-101a48.15 48.15 0 00-21.64-54.35l-61.24-36.11 31.31-78.21 20.27 41.39a48.31 48.31 0 0043.1 26.94h54a32 32 0 100-63.95zm-270.31 93.4l-14.8 34.5H32a32 32 0 100 63.94h77.45a47.88 47.88 0 0044.11-29.06l8.79-20.5-10.67-6.3a95.23 95.23 0 01-38-42.58z"
      className="running_svg__fa-primary"
    />
  </svg>
);

SvgRunning.displayName = "SvgRunning";
SvgRunning.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRunning;
