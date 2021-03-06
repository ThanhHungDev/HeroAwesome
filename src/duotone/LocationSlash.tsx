import * as React from "react";

const SvgLocationSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M189.36 115.58A191.34 191.34 0 01288 66.88V16a16 16 0 0116-16h32a16 16 0 0116 16v50.88A191.86 191.86 0 01509.12 224H560a16 16 0 0116 16v32a16 16 0 01-16 16h-50.88a190.53 190.53 0 01-20.3 59l-51.51-39.81A128 128 0 00240.87 155.4zM320 384a127.93 127.93 0 01-125.55-103.7L121.61 224H80a16 16 0 00-16 16v32a16 16 0 0016 16h50.88A191.86 191.86 0 00288 445.12V496a16 16 0 0016 16h32a16 16 0 0016-16v-50.88c14.07-2.37 27.35-6.75 40.19-12l-64.57-49.9c-2.57.16-5.01.78-7.62.78zm0-216a87.6 87.6 0 00-46 13l130.2 100.63A88 88 0 00320 168z"
      opacity={0.4}
    />
    <path
      d="M3.37 32.45L23 7.18a16 16 0 0122.47-2.81L633.82 459.1a16 16 0 012.82 22.45L617 506.82a16 16 0 01-22.46 2.81L6.18 54.9a16 16 0 01-2.81-22.45z"
      className="location-slash_svg__fa-primary"
    />
  </svg>
);

SvgLocationSlash.displayName = "SvgLocationSlash";
SvgLocationSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLocationSlash;
