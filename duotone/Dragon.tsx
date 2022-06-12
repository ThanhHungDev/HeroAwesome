import * as React from "react";

const SvgDragon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M320 194.35v42.27A247.35 247.35 0 00334.73 320H112c-14.25 0-21.39-17.23-11.31-27.31L192 224 18.32 255.82C2.36 258.1-6.57 238 5.81 227.68l117.4-116.34a64 64 0 0177.06-4.59z"
      opacity={0.4}
    />
    <path
      d="M575.19 289.88l-100.66-50.31A48 48 0 01448 196.65V160h64l28.09 22.63a32 32 0 0022.63 9.37h31a32 32 0 0028.62-17.69l14.31-28.62a32 32 0 00-3-33.51l-74.58-99.42A32 32 0 00533.47 0H296a8 8 0 00-5.66 13.61L352 64l-59.58 24.8a8 8 0 000 14.31L352 128v108.58A215.61 215.61 0 00448 416c-195.59 6.81-344.56 41-434.1 60.91A17.78 17.78 0 0017.76 512h499.08c63.29 0 119.61-47.56 123-110.76a116.7 116.7 0 00-64.65-111.36zm-86-223.63l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.97-.71-25.86-12.53-21.53-29.67z"
      className="dragon_svg__fa-primary"
    />
  </svg>
);

SvgDragon.displayName = "SvgDragon";
SvgDragon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDragon;
