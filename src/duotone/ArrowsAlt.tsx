import * as React from "react";

const SvgArrowsAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M384 288h-96v96h-64v-96h-96v-64h96v-96h64v96h96z" opacity={0.4} />
    <path
      d="M504.93 239.07l-79.7-79C410 145 384 155.67 384 177v158c0 21.34 26 32 41.23 16.93l79.7-79 .2-.2a23.8 23.8 0 00-.2-33.66zm-418.16-79l-79.7 79-.2.2a23.8 23.8 0 00.2 33.66l79.7 79C102 367 128 356.33 128 335V177c0-21.34-26-32-41.23-16.93zM335 384H177c-21.34 0-32 26-16.93 41.23l79 79.7.2.2a23.8 23.8 0 0033.66-.2l79-79.7C367 410 356.33 384 335 384zM272.93 7.07l-.2-.2a23.8 23.8 0 00-33.66.2l-79 79.7C145 102 155.67 128 177 128h158c21.34 0 32-26 16.93-41.23z"
      className="arrows-alt_svg__fa-primary"
    />
  </svg>
);

SvgArrowsAlt.displayName = "SvgArrowsAlt";
SvgArrowsAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowsAlt;
