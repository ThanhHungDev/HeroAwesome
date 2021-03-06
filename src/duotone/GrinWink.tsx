import * as React from "react";

const SvgGrinWink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm20.2 214.2c4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.6 11-11.5 18.2-20 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8zM168 176a32 32 0 11-32 32 32 32 0 0132-32zm223.8 162.7c-9.2 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3a16 16 0 0120.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2a16 16 0 0120.7 17.9z"
      opacity={0.4}
    />
    <path
      d="M168 176a32 32 0 1032 32 32 32 0 00-32-32zm220 46.2c-4-25.2-34.2-42.1-59.9-42.1s-55.9 16.9-59.9 42.1c-1.8 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.2 20-10.8z"
      className="grin-wink_svg__fa-primary"
    />
  </svg>
);

SvgGrinWink.displayName = "SvgGrinWink";
SvgGrinWink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrinWink;
