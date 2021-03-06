import * as React from "react";

const SvgCommentAltTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zM340.9 281.5l-11.3 11.3a16.06 16.06 0 01-22.6 0l-51-50.9-50.9 50.9a16.06 16.06 0 01-22.6 0l-11.3-11.3a16.06 16.06 0 010-22.6l50.9-50.9-50.9-50.9a16.06 16.06 0 010-22.6l11.3-11.3a16.06 16.06 0 0122.6 0l50.9 50.9 50.9-50.9a16.06 16.06 0 0122.6 0l11.3 11.3a16.06 16.06 0 010 22.6L289.9 208l51 50.9a16.06 16.06 0 010 22.6z"
      opacity={0.4}
    />
    <path
      d="M340.9 281.5l-11.3 11.3a16.06 16.06 0 01-22.6 0l-51-50.9-50.9 50.9a16.06 16.06 0 01-22.6 0l-11.3-11.3a16.06 16.06 0 010-22.6l50.9-50.9-50.9-50.9a16.06 16.06 0 010-22.6l11.3-11.3a16.06 16.06 0 0122.6 0l50.9 50.9 50.9-50.9a16.06 16.06 0 0122.6 0l11.3 11.3a16.06 16.06 0 010 22.6L289.9 208l51 50.9a16.06 16.06 0 010 22.6z"
      className="comment-alt-times_svg__fa-primary"
    />
  </svg>
);

SvgCommentAltTimes.displayName = "SvgCommentAltTimes";
SvgCommentAltTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltTimes;
