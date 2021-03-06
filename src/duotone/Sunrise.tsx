import * as React from "react";

const SvgSunrise = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M250.9 374.45C230.3 383 214.6 398 204.3 416h167.2c-23.8-41.65-75.1-60.35-120.6-41.55zm260.8-20.1l-106.5-7.6-7.6-106.5a17.5 17.5 0 00-28.9-12l-80.7 70-80.7-70a17.5 17.5 0 00-28.9 12l-7.6 106.5-106.5 7.6a17.5 17.5 0 00-12 28.9L80.7 416h87.6c.2-.5.2-1 .4-1.4 27.3-65.8 102.9-97.2 168.7-69.9a128.68 128.68 0 0170.3 71.3h87.6l28.4-32.7a17.5 17.5 0 00-12-28.95z"
      opacity={0.4}
    />
    <path
      d="M560 464H16a16 16 0 00-16 16v16a16 16 0 0016 16h544a16 16 0 0016-16v-16a16 16 0 00-16-16zM190.8 128H256v80a16 16 0 0016 16h32a16 16 0 0016-16v-80h65.2c14.3 0 21.4-17.3 11.2-27.4L300 5a17 17 0 00-24 0l-96.4 95.7c-10.2 9.95-3 27.3 11.2 27.3z"
      className="sunrise_svg__fa-primary"
    />
  </svg>
);

SvgSunrise.displayName = "SvgSunrise";
SvgSunrise.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSunrise;
