import * as React from "react";

const SvgBoxHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v256a32 32 0 0032 32h384a32 32 0 0032-32V192zm305.1 149.2l-72.6 71.4a12.2 12.2 0 01-17 0l-72.6-71.4a49.59 49.59 0 013.7-74.2c20.5-16.7 51.1-13.7 70 4.8l7.4 7.3 7.4-7.3c18.8-18.5 49.4-21.5 70-4.8a49.66 49.66 0 013.7 74.2z"
      opacity={0.4}
    />
    <path
      d="M301.4 267c-20.6-16.7-51.2-13.7-70 4.8l-7.4 7.3-7.4-7.3c-18.9-18.5-49.5-21.5-70-4.8a49.59 49.59 0 00-3.7 74.2l72.6 71.4a12.2 12.2 0 0017 0l72.6-71.4a49.66 49.66 0 00-3.7-74.2zm89.9-213.1A32 32 0 00360.9 32H240v128h206.7c.4-.5.5-.7.9-1.2zM208 32H87.1a32 32 0 00-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2H208z"
      className="box-heart_svg__fa-primary"
    />
  </svg>
);

SvgBoxHeart.displayName = "SvgBoxHeart";
SvgBoxHeart.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxHeart;
