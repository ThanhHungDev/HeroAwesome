import * as React from "react";

const SvgClarinet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M630.13 129.22a16 16 0 00-17.44 3.47L569.38 176H101.2a32 32 0 00-10.13 1.64l-80.13 26.71A16 16 0 000 219.53v72.94a16 16 0 0010.94 15.18l80.13 26.71A32 32 0 00101.2 336h468.18l43.31 43.31A16 16 0 00640 368V144a16 16 0 00-9.87-14.78zM272 280a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24zm96 0a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M368 232a24 24 0 1024 24 24 24 0 00-24-24zm-96 0a24 24 0 1024 24 24 24 0 00-24-24zm232-120H232a8 8 0 00-8 8v16a8 8 0 008 8h24v32h32v-32h64v32h32v-32h64v32h32v-32h24a8 8 0 008-8v-16a8 8 0 00-8-8zm-40 120a24 24 0 1024 24 24 24 0 00-24-24z"
      className="clarinet_svg__fa-primary"
    />
  </svg>
);

SvgClarinet.displayName = "SvgClarinet";
SvgClarinet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClarinet;
