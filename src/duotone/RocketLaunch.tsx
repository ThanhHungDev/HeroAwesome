import * as React from "react";

const SvgRocketLaunch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M35.68 352.066C9.827 377.92-2.95 442.594.577 511.41c69.101 3.559 133.59-9.351 159.34-35.105 40.285-40.28 42.87-93.987 6.308-130.55-36.558-36.558-90.265-33.97-130.547 6.311zm94.956 81.055c-10.73 10.733-37.605 16.111-66.402 14.627-1.465-28.674 3.86-55.623 14.633-66.396 16.781-16.786 39.164-17.864 54.398-2.63 15.23 15.237 14.157 37.616-2.629 54.4zM51.941 154.484l-49.41 98.813A28.125 28.125 0 000 264a24.006 24.006 0 0024 24h93.46c23.442-47.412 61.012-123.373 77.891-157.328.52-.914 1-1.768 1.524-2.672H94.82c-16.344.016-35.531 11.875-42.879 26.484zm329.395 162.088C347.375 333.58 271.273 371.252 224 394.646v93.563A24.124 24.124 0 00247.96 512a28.03 28.03 0 0010.626-2.531l98.726-49.39c14.625-7.313 26.5-26.5 26.5-42.86V315.703c.067-.04.125-.088.188-.129v-.527c-.906.52-1.746 1.002-2.664 1.525z"
      opacity={0.4}
    />
    <path
      d="M505.16 19.516a16.74 16.74 0 00-12.535-12.57C460.226 0 434.375 0 409.485 0c-89.15 0-156.677 40.615-212.509 127.818-.558.979-1.07 1.877-1.625 2.854-16.879 33.955-54.449 109.916-77.89 157.328H128a96 96 0 0196 96v10.646c47.273-23.394 123.375-61.066 157.336-78.074l2.789-1.597c87.234-56.06 127.86-123.512 127.86-212.278.077-25.09.144-50.61-6.825-83.181zM368 192a48 48 0 1148-48.002A48.022 48.022 0 01368 192zM78.867 381.352c-10.773 10.773-16.098 37.722-14.633 66.396 28.797 1.484 55.672-3.894 66.402-14.627 16.786-16.783 17.86-39.162 2.63-54.398-15.235-15.235-37.618-14.157-54.399 2.629z"
      className="rocket-launch_svg__fa-primary"
    />
  </svg>
);

SvgRocketLaunch.displayName = "SvgRocketLaunch";
SvgRocketLaunch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRocketLaunch;