import * as React from "react";

const SvgWifi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      d="M320 352c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm202.7-83.6c-115.3-101.9-290.2-101.8-405.3 0-6.5 5.8-7.1 15.8-1.4 22.3.3.3.5.6.8.8l34.4 34c6 5.9 15.6 6.3 22 .8 84-72.6 209.7-72.4 293.5 0 6.4 5.5 16 5.2 22-.8l34.4-34c6.2-6.1 6.4-16.1.3-22.4l-.7-.7zm112.7-113c-.2-.2-.4-.3-.5-.5C457.7-9 182.2-8.9 5.1 154.9c-6.4 6-6.8 16-.9 22.5.2.2.3.4.5.5l34.2 34c6.2 6.1 16 6.2 22.4.4 145.9-133.7 371.3-133.7 517.2 0 6.4 5.9 16.2 5.7 22.4-.4l34.2-34c6.4-6.2 6.5-16.2.3-22.5z"
      className="wifi_svg__fa-primary"
    />
  </svg>
);

SvgWifi.displayName = "SvgWifi";
SvgWifi.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWifi;
