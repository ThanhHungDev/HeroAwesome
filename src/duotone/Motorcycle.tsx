import * as React from "react";

const SvgMotorcycle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M252 352a127.94 127.94 0 11-87.42-154.7l-24 43.69A80 80 0 10201.3 352zm260-160a127.81 127.81 0 00-41.46 6.87l25.61 42.71a80.22 80.22 0 11-42 23.26l-25.26-42.17A128 128 0 10512 192z"
      opacity={0.4}
    />
    <path
      d="M175.83 176.8c-9.1-13.9-23.3-24.8-47.8-24.8H72a24 24 0 01-24-23.5C47.73 115 59 104 72.53 104H128c55 0 82.2 16.9 99.9 40h153.7l-19.2-32H296a16 16 0 01-16-16V80a16 16 0 0116-16h80a24.16 24.16 0 0120.6 11.6l22.8 38 37.5-41.7a24 24 0 0117.8-7.9H520a23.94 23.94 0 0124 24v32a23.94 23.94 0 01-24 24h-82.4l107.1 178.6a16.07 16.07 0 01-5.5 22l-13.7 8.2a16.07 16.07 0 01-22-5.5l-87.1-145.4a151.48 151.48 0 00-56.2 125 24 24 0 01-24 25.1H120a24 24 0 01-21-35.6z"
      className="motorcycle_svg__fa-primary"
    />
  </svg>
);

SvgMotorcycle.displayName = "SvgMotorcycle";
SvgMotorcycle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMotorcycle;