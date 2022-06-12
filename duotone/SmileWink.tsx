import * as React from "react";

const SvgSmileWink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168a32 32 0 11-32 32 32 32 0 0132-32zm194.8 170.3a149.48 149.48 0 01-229.6-.1c-13.5-16.3 11.2-36.7 24.6-20.4a117.5 117.5 0 00180.4 0c13.6-16.2 38.1 4.2 24.6 20.5zm5.4-113.3l-9.7-8.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8z"
      opacity={0.4}
    />
    <path
      d="M388 222.2c-4-25.2-34.2-42.1-59.9-42.1s-55.9 16.9-59.9 42.1c-1.8 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.7 8.5c8.4 7.5 21.5.3 19.8-10.8zM168 176a32 32 0 1032 32 32 32 0 00-32-32z"
      className="smile-wink_svg__fa-primary"
    />
  </svg>
);

SvgSmileWink.displayName = "SvgSmileWink";
SvgSmileWink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmileWink;
