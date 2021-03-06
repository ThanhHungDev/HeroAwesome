import * as React from "react";

const SvgQuidditch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M494.5 351.82a79.9 79.9 0 1079.8 79.9 79.91 79.91 0 00-79.8-79.9zM636.5 31L616.7 6a16 16 0 00-22.4-2.6L361.8 181.32l39.7 50.1L634 53.52A16 16 0 00636.5 31z"
      opacity={0.4}
    />
    <path
      d="M93.2 257.72c-21.9 17.5-40.2 55.8-54.6 97.5l60.4-22.1a6 6 0 016.6 9.5L11 454.82c-7.2 32.3-11 55.4-11 55.4s206.7 13.6 266.6-34.1S343.2 326 343.2 326l-86.7-109.2s-103.4-6.88-163.3 40.92zm342.4 16.6l-107.9-136a11 11 0 00-18.6 2.2l-25.3 54.6 86.7 109.2 58.8-12.4a11 11 0 006.3-17.6z"
      className="quidditch_svg__fa-primary"
    />
  </svg>
);

SvgQuidditch.displayName = "SvgQuidditch";
SvgQuidditch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgQuidditch;
