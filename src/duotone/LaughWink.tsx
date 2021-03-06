import * as React from "react";

const SvgLaughWink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm20.1 198.1c4-25.2 34.2-42.1 59.9-42.1s55.9 16.9 59.9 42.1c1.7 11.1-11.4 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L288 217a12.08 12.08 0 01-19.9-10.9zM168 160a32 32 0 11-32 32 32 32 0 0132-32zm230.9 146A144.12 144.12 0 01256 432h-16A144.12 144.12 0 0197.1 306a16.06 16.06 0 0114-17.88 15 15 0 011.9-.12h270a16 16 0 0116 16 16.64 16.64 0 01-.1 2z"
      opacity={0.4}
    />
    <path
      d="M387.9 206.1c-4-25.2-34.2-42.1-59.9-42.1s-55.9 16.9-59.9 42.1A12.08 12.08 0 00288 217l9.6-8.6c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.4 7.5 21.5.3 19.8-10.8zM168 160a32 32 0 1032 32 32 32 0 00-32-32z"
      className="laugh-wink_svg__fa-primary"
    />
  </svg>
);

SvgLaughWink.displayName = "SvgLaughWink";
SvgLaughWink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLaughWink;
