import * as React from "react";

const SvgBullseyePointer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M312 256a64 64 0 01-28.93 53.43l-20.77 73.1C326.18 375.35 376 321.78 376 256a128 128 0 00-128-128c-65.78 0-119.35 49.82-126.53 113.7l73.11-20.78A63.91 63.91 0 01312 256zM248 8C111.08 8 .11 119 .11 256c0 8.39.44 16.67 1.26 24.85a48.57 48.57 0 0118-10.08L64.21 258c0-.68-.1-1.33-.1-2a184 184 0 11184 184c-.68 0-1.34-.09-2-.1l-12.75 44.87a48.53 48.53 0 01-10 18c8.16.81 16.44 1.25 24.82 1.25C385 504 496 393 496 256S385 8 248 8z"
      opacity={0.4}
    />
    <path
      d="M242.21 240.65a17.13 17.13 0 0121.16 21.17L202.51 476c-4.31 15.17-25.08 17-31.91 2.73l-32.88-68.47-89.15 89.15a15.51 15.51 0 01-21.95 0h-.05l-22-22a15.52 15.52 0 01-.05-22h.05l89.15-89.15-68.36-32.81c-14.25-6.82-12.44-27.61 2.74-31.92l214.13-60.88z"
      className="bullseye-pointer_svg__fa-primary"
    />
  </svg>
);

SvgBullseyePointer.displayName = "SvgBullseyePointer";
SvgBullseyePointer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBullseyePointer;
