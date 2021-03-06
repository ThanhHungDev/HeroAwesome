import * as React from "react";

const SvgBroom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M636.53 31A16 16 0 01634 53.47l-232.5 177.8-39.72-50L594.26 3.47A15.94 15.94 0 01616.67 6l19.86 25z"
      opacity={0.4}
    />
    <path
      d="M93.17 257.71c-21.88 17.43-40.17 55.81-54.6 97.47L99 333.09a6 6 0 016.65 9.5L11 454.76c-7.2 32.29-11 55.43-11 55.43s206.66 13.66 266.63-34.12S343.2 326 343.2 326l-86.73-109.23S153.14 210 93.17 257.71zm342.42 16.48L327.64 138.3a11 11 0 00-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45a11 11 0 006.34-17.6z"
      className="broom_svg__fa-primary"
    />
  </svg>
);

SvgBroom.displayName = "SvgBroom";
SvgBroom.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBroom;
