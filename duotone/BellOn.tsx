import * as React from "react";

const SvgBellOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M479.92 208c0-77.69-54.48-139.91-127.94-155.16V32a32 32 0 10-64 0v20.84c-73.42 15.25-127.9 77.47-127.9 155.16 0 102.31-36.14 133.53-55.47 154.28A31.28 31.28 0 0096 384c.11 16.41 13 32 32.09 32h383.82c19.11 0 32-15.59 32.09-32a31.23 31.23 0 00-8.61-21.72c-19.33-20.75-55.47-51.97-55.47-154.28z"
      opacity={0.4}
    />
    <path
      d="M88 168H24a24 24 0 000 48h64a24 24 0 000-48zm43.08-112.78l-55.42-32a24 24 0 10-24 41.56l55.42 32a24 24 0 1024-41.56zm457.26 9.56a24 24 0 00-24-41.56l-55.42 32a24 24 0 1024 41.56zM320 512a64 64 0 0064-64H256a64 64 0 0064 64zm296-344h-64a24 24 0 000 48h64a24 24 0 000-48z"
      className="bell-on_svg__fa-primary"
    />
  </svg>
);

SvgBellOn.displayName = "SvgBellOn";
SvgBellOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellOn;
