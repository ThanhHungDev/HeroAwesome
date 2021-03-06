import * as React from "react";

const SvgChalkboardTeacher = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 49.59v316.82c0 27.34-21.53 49.59-48 49.59H343.79c-.9-2.53-1.86-5.05-2.9-7.54A144.52 144.52 0 00298.51 352H576V64H224v49.1a127 127 0 00-59.46-17h-.33c-1.4 0-2.8-.08-4.21-.08V49.59C160 22.25 181.53 0 208 0h384c26.47 0 48 22.25 48 49.59z"
      opacity={0.4}
    />
    <path
      d="M208 352a22.88 22.88 0 00-7.06 1.09A131.91 131.91 0 01160 360a132 132 0 01-40.95-6.91 22.82 22.82 0 00-7-1.09A112 112 0 000 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38A112 112 0 00208 352zm-48-32a96 96 0 10-96-96 96 96 0 0096 96zm64-256v49.09a129 129 0 0126.51 20.4 128 128 0 010 181 132.13 132.13 0 01-10.14 9.14A143.89 143.89 0 01298.51 352H384v-64h128v64h64V64z"
      className="chalkboard-teacher_svg__fa-primary"
    />
  </svg>
);

SvgChalkboardTeacher.displayName = "SvgChalkboardTeacher";
SvgChalkboardTeacher.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChalkboardTeacher;
