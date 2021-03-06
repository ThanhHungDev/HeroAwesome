import * as React from "react";

const SvgUserCowboy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M352 224.28v.22a128 128 0 01-256 0v-.23c32.26 18.65 74.19 32.23 128 32.23s95.71-13.57 128-32.22z"
      opacity={0.4}
    />
    <path
      d="M313.59 384h-16.68a174.12 174.12 0 01-145.82 0h-16.68A133.82 133.82 0 009.55 469.8C1.66 490.19 18.08 512 40 512h368.1c21.87 0 38.29-21.81 30.4-42.2A133.82 133.82 0 00313.59 384zm28.91-270.44C331.44 64 310.87 0 278.1 0c-10.33 0-19.55 4.45-27.3 10.47a42.41 42.41 0 01-52.07 0C191 4.45 181.76 0 171.43 0c-32.88 0-53.49 64.49-64.51 114.09C133 124 170.75 132.57 224 132.57c54.18 0 92.36-8.84 118.5-19.01zm96-15.76a18.2 18.2 0 00-21.95 5.2c-.43.57-44.81 61.59-192.55 61.59C77.12 164.57 32.4 104.21 31.46 103a18 18 0 00-21.79-5.37c-7.76 3.53-11.51 11.84-8.79 19.44C1.4 118.46 52.75 256 224 256s222.61-137.54 223.13-138.93c2.69-7.54-1.03-15.69-8.66-19.27z"
      className="user-cowboy_svg__fa-primary"
    />
  </svg>
);

SvgUserCowboy.displayName = "SvgUserCowboy";
SvgUserCowboy.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserCowboy;
