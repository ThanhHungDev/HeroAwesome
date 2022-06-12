import * as React from "react";

const SvgIntegral = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M340.18 58.73C325.55 41.75 303.85 32 280.67 32c-35.78 0-66.49 22.94-74.62 55.78l-80.66 325.25C122.67 424.02 111.57 432 99 432c-8.3 0-16.31-3.53-21.41-9.44l-35.66-41.45c-5.84-6.79-16.27-7.71-23.29-2.06l-12.7 10.24c-7.01 5.65-7.96 15.74-2.13 22.53l35.67 41.47C54.12 470.27 75.82 480 99 480c35.78 0 66.49-22.94 74.62-55.78l80.66-325.25C257 87.98 268.11 80 280.67 80c8.3 0 16.31 3.53 21.41 9.44l39.99 46.53c5.84 6.79 16.27 7.72 23.29 2.07l12.69-10.22c7.02-5.65 7.97-15.74 2.14-22.53l-40.01-46.56z" />
  </svg>
);

SvgIntegral.displayName = "SvgIntegral";
SvgIntegral.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIntegral;
