import * as React from "react";

const SvgSunset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M250.9 374.5c-20.6 8.5-36.3 23.5-46.6 41.5h167.2c-23.8-41.6-75.1-60.3-120.6-41.5zm260.8-20.1l-106.5-7.6-7.6-106.5a17.5 17.5 0 00-28.9-12l-80.7 70-80.7-70a17.5 17.5 0 00-28.9 12l-7.6 106.5-106.5 7.6a17.5 17.5 0 00-12 28.9L80.7 416h87.6c.2-.5.2-1 .4-1.4 27.3-65.8 102.9-97.2 168.7-69.9a128.68 128.68 0 0170.3 71.3h87.6l28.4-32.7a17.5 17.5 0 00-12-28.9z"
      opacity={0.4}
    />
    <path
      d="M560 464H16a16 16 0 00-16 16v16a16 16 0 0016 16h544a16 16 0 0016-16v-16a16 16 0 00-16-16zM276 219a17 17 0 0024 0l96.4-95.7c10.1-10.1 3-27.4-11.3-27.4H320V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v80h-65.2c-14.3 0-21.4 17.3-11.2 27.4z"
      className="sunset_svg__fa-primary"
    />
  </svg>
);

SvgSunset.displayName = "SvgSunset";
SvgSunset.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSunset;
