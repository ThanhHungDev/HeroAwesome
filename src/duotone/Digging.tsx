import * as React from "react";

const SvgDigging = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M311.07 416a32 32 0 00-30.36 21.88L256 512h320L474.07 305.68c-11.29-22.59-43.07-23.81-56.07-2.15L352 416z"
      opacity={0.4}
    />
    <path
      d="M272 96a48 48 0 10-48-48 48 48 0 0048 48zm-62.24 261.36q-38.7-25.78-79.55-48.09l-71.56-39-57.42 201a32 32 0 1061.56 17.59l36.6-128.16L160 401.11V480a32 32 0 0064 0v-96a32 32 0 00-14.24-26.64zm176.39.46l-65.3-35.62-24-121.2a129.78 129.78 0 00-69.72-91.2c-1-.5-2.11-.66-3.11-1.13a31 31 0 00-7.22-2.67c-15.34-6.1-31.56-10-48.07-10H96a32 32 0 00-24.07 10.92l-56 64a25.89 25.89 0 00-2.3 3.16c-8.83 14.1-3 32.86 11.62 40.85l336.6 184.3zM105.9 205l-23.49-12.85L110.54 160h34.33zm93.74 51.13l34.73-41.23 13.5 67.54z"
      className="digging_svg__fa-primary"
    />
  </svg>
);

SvgDigging.displayName = "SvgDigging";
SvgDigging.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDigging;
