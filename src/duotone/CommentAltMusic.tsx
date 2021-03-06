import * as React from "react";

const SvgCommentAltMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M448 0H64A64.05 64.05 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.09 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.05 64.05 0 00-64-64zm-96 256c0 17.68-21.5 32-48 32s-48-14.32-48-32 21.5-32 48-32a69.27 69.27 0 0116 1.95v-76.32l-96 37.52V288c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.27 69.27 0 0116 2V143.24A16 16 0 01203.19 128l128-47.24A16 16 0 01352 96z"
      opacity={0.4}
    />
    <path
      d="M176 256a69.82 69.82 0 0116 2V143.25A16 16 0 01203.19 128l128-47.25A16 16 0 01352 96v160c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2v-76.36l-96 37.52V288c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32z"
      className="comment-alt-music_svg__fa-primary"
    />
  </svg>
);

SvgCommentAltMusic.displayName = "SvgCommentAltMusic";
SvgCommentAltMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltMusic;
