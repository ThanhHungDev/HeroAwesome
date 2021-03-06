import * as React from "react";

const SvgKnifeKitchen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M4.87 469.83L267.52 216.6l129.09 124.45a15.6 15.6 0 010 22.63l-61 58.85c-84.89 81.81-210.41 110.38-324.25 73.79-11.71-3.75-15.21-18.08-6.49-26.49z"
      opacity={0.4}
    />
    <path
      d="M566.28 43.31L531.07 9.38a34.07 34.07 0 00-46.94 0L291.82 194.77l112.1 108.08 34.35-27.7a31.47 31.47 0 009.73-22.64V208L566.28 88.57a31.2 31.2 0 000-45.26zm-122 106.36a17 17 0 01-23.47 0 15.6 15.6 0 010-22.63 17 17 0 0123.47 0 15.6 15.6 0 01-.04 22.63zm60.52-58.36a17 17 0 01-23.47 0 15.59 15.59 0 010-22.62 17 17 0 0123.47 0 15.59 15.59 0 01-.04 22.62z"
      className="knife-kitchen_svg__fa-primary"
    />
  </svg>
);

SvgKnifeKitchen.displayName = "SvgKnifeKitchen";
SvgKnifeKitchen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKnifeKitchen;
