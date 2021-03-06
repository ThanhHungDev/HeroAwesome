import * as React from "react";

const SvgCommentMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.59 32 0 125.09 0 240c0 49.59 21.41 95 57 130.7C44.5 421.09 2.69 466 2.19 466.5a8 8 0 00-1.5 8.7A7.87 7.87 0 008 480c66.31 0 116-31.8 140.59-51.41A304.63 304.63 0 00256 448c141.41 0 256-93.09 256-208S397.41 32 256 32zm96 256c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2v-76.36l-96 37.52V320c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2V175.25A16 16 0 01203.19 160l128-47.25A16 16 0 01352 128z"
      opacity={0.4}
    />
    <path
      d="M176 288a69.82 69.82 0 0116 2V175.25A16 16 0 01203.19 160l128-47.25A16 16 0 01352 128v160c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32a69.82 69.82 0 0116 2v-76.36l-96 37.52V320c0 17.67-21.5 32-48 32s-48-14.33-48-32 21.5-32 48-32z"
      className="comment-music_svg__fa-primary"
    />
  </svg>
);

SvgCommentMusic.displayName = "SvgCommentMusic";
SvgCommentMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentMusic;
