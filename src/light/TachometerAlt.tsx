import * as React from "react";

const SvgTachometerAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 152c13.26 0 24-10.74 24-24s-10.74-24-24-24-24 10.74-24 24 10.74 24 24 24zm-136 8c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm272 0c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm56 136c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zM288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm221.5 416l-442.8.68C44 409.75 32 365.26 32 320 32 178.84 146.84 64 288 64s256 114.84 256 256c0 45.26-12 89.75-34.5 128zM96 296c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm269.22-167.12c-8.19-2.78-17.44 1.55-20.34 9.89l-51.83 149.74c-1.69-.13-3.31-.51-5.04-.51-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64c0-22.25-11.38-41.82-28.62-53.29l51.74-149.48c2.87-8.34-1.54-17.46-9.91-20.35zM288 384c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z" />
  </svg>
);

SvgTachometerAlt.displayName = "SvgTachometerAlt";
SvgTachometerAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerAlt;