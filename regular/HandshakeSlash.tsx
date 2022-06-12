import * as React from "react";

const SvgHandshakeSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M346.7 395.21c-6 7.29-15 4.79-18 2.39l-36.79-31.5-15.61 19.2c-13.89 17.11-39.21 19.7-55.3 6.61l-97.3-88H96V175.8h4.53l-61.26-47.89H0V383.6h64a31.89 31.89 0 0031.91-31.69H105l84.59 76.39c30.91 25.11 73.82 25.7 105.61 3.8 12.5 10.81 26 15.9 41.1 15.9 18.2 0 35.29-7.4 48.79-24a56 56 0 0035.2 1.78l-60.1-47zM48 351.6a16 16 0 1116-16 16 16 0 01-16 16zm329.91-172.8L367 167.1a16.07 16.07 0 00-22.59-1L334 175.6l38.32 30 4.55-4.14a16 16 0 001.04-22.66zm141.29-50.89L471.59 80.3C462.52 71.3 444.78 64 432 64H205.2a56.09 56.09 0 00-12.07 1.42l102.94 80.48 25.34-23.2a39.77 39.77 0 0127-10.5l83.68-.2a7.43 7.43 0 015.5 2.29l61.71 61.61H544v128h-45.82l101.93 79.7H640V127.91zM592 351.6a16 16 0 1116-16 16 16 0 01-16 16zM36 3.52A16 16 0 0013.51 6l-10 12.49A16 16 0 006 41l598 467.48a16 16 0 0022.48-2.48l10-12.49A16 16 0 00634 471z" />
  </svg>
);

SvgHandshakeSlash.displayName = "SvgHandshakeSlash";
SvgHandshakeSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandshakeSlash;
