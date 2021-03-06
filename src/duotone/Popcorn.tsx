import * as React from "react";

const SvgPopcorn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M101.46 118a37.17 37.17 0 01.33-37.43c9.11-16 28-23.66 45.57-20.12.34-16.64 11.46-32 29-37.43a43.36 43.36 0 0138.82 6.08A41.63 41.63 0 01242.5 2c22.27-6.78 46.23 4.42 53.33 25.54a4.22 4.22 0 01.68 1.92A43.29 43.29 0 01335.65 23c17.53 5.43 28.67 20.79 29 37.43C382.2 57 401.09 64.6 410.2 80.6a37.88 37.88 0 01.33 37.43 42.7 42.7 0 0133.09 20.79c3.91 6.75 4.76 14 4.24 21.12H64.13c-.5-7.12.35-14.38 4.27-21.12 6.74-12.15 19.6-19.51 33.06-20.82z"
      opacity={0.4}
    />
    <path
      d="M64 192h81.56l28 256h45.05l-21.56-256H315l-21.61 256h45l28-256H448l-43.91 292.73A32 32 0 01372.44 512H139.56a32 32 0 01-31.65-27.25z"
      className="popcorn_svg__fa-primary"
    />
  </svg>
);

SvgPopcorn.displayName = "SvgPopcorn";
SvgPopcorn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPopcorn;
