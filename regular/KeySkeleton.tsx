import * as React from "react";

const SvgKeySkeleton = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M313.5 153.27c-12.49 12.49-12.49 32.74 0 45.23 12.49 12.49 32.74 12.49 45.23 0 12.49-12.49 12.49-32.74 0-45.23-12.49-12.49-32.74-12.49-45.23 0zm63.96-63.96c-12.49 12.49-12.49 32.74 0 45.23 12.49 12.49 32.74 12.49 45.23 0 12.49-12.49 12.49-32.74 0-45.23-12.49-12.49-32.74-12.49-45.23 0zM448.04 0H288.15c-35.32 0-63.96 28.64-63.96 63.96v159.89c0 8.86 1.81 17.3 5.07 24.97L4.68 473.4c-6.24 6.24-6.24 16.37 0 22.61l11.3 11.3c6.24 6.24 16.37 6.24 22.61 0l38.79-38.79 38.31 38.31c6.24 6.24 16.37 6.24 22.61 0l43.13-43.13c6.24-6.24 6.24-16.37 0-22.61l-38.31-38.31 30.86-30.86 39.12 39.12c6.24 6.25 16.37 6.25 22.61 0l15.76-15.76c6.24-6.24 6.24-16.37 0-22.61l-39.12-39.12 50.81-50.81a63.69 63.69 0 0024.97 5.07h159.89c35.32 0 63.96-28.64 63.96-63.96V63.96C512 28.64 483.37 0 448.04 0zm15.99 223.85c0 8.82-7.17 15.99-15.99 15.99H288.15c-8.82 0-15.99-7.17-15.99-15.99V63.96c0-8.82 7.17-15.99 15.99-15.99h159.89c8.82 0 15.99 7.17 15.99 15.99v159.89z" />
  </svg>
);

SvgKeySkeleton.displayName = "SvgKeySkeleton";
SvgKeySkeleton.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKeySkeleton;