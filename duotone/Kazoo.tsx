import * as React from "react";

const SvgKazoo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M608 128h-95.32C559.55 151.75 592 199.86 592 256s-32.45 104.25-79.32 128H608a32 32 0 0032-32V160a32 32 0 00-32-32zM304 256c0-56.14 32.45-104.25 79.32-128H241.93a128.18 128.18 0 00-35.16 4.92L23.21 185.37A32 32 0 000 216.14v79.72a32 32 0 0023.21 30.77l183.56 52.44a127.81 127.81 0 0035.16 4.93h141.39C336.45 360.25 304 312.14 304 256zm240 0a96 96 0 10-96 96 96 96 0 0096-96zm-45.09 28.28a8 8 0 010 11.32l-11.31 11.31a8 8 0 01-11.32 0L448 278.63l-28.29 28.28a8 8 0 01-11.31 0l-11.31-11.31a8 8 0 010-11.32L425.38 256l-28.29-28.29a8 8 0 010-11.31l11.31-11.31a8 8 0 0111.31 0L448 233.37l28.28-28.28a8 8 0 0111.32 0l11.31 11.31a8 8 0 010 11.31L470.63 256z"
      opacity={0.4}
    />
    <path
      d="M448 112a144 144 0 10144 144 144 144 0 00-144-144zm0 240a96 96 0 1196-96 96 96 0 01-96 96z"
      className="kazoo_svg__fa-primary"
    />
  </svg>
);

SvgKazoo.displayName = "SvgKazoo";
SvgKazoo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKazoo;
