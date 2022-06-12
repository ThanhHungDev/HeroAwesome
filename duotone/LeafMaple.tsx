import * as React from "react";

const SvgLeafMaple = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M504 195.56l-140.83 89.59L428 268.57a17.33 17.33 0 0120.57 21.12l-13.8 25.72 51.31 45.3a17.34 17.34 0 010 27.07l-51.31 45.3 13.8 25.72A17.33 17.33 0 01428 479.92l-160.19-33L251.94 484c-6 14-25.86 14-31.88 0l-49.14-108 141.86-141.91a24.65 24.65 0 10-34.86-34.87L136.06 341.1 28 291.94c-14-6-14-25.87 0-31.87l37.08-15.89L32.08 84a17.34 17.34 0 0121.13-20.59l25.73 13.81 45.3-51.33a17.33 17.33 0 0127.06 0l45.3 51.33 25.73-13.82A17.33 17.33 0 01243.45 84l-16.58 64.84L316.46 8a17.35 17.35 0 0129.5.39l22.33 37.23 88.77-9.86a17.34 17.34 0 0119.15 19.14l-9.87 88.78 37.24 22.34a17.35 17.35 0 01.42 29.54z"
      opacity={0.4}
    />
    <path
      d="M24.67 512a24.61 24.61 0 01-17.43-42l270.68-270.78a24.65 24.65 0 1134.86 34.87L42.1 504.82A24.51 24.51 0 0124.67 512z"
      className="leaf-maple_svg__fa-primary"
    />
  </svg>
);

SvgLeafMaple.displayName = "SvgLeafMaple";
SvgLeafMaple.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLeafMaple;