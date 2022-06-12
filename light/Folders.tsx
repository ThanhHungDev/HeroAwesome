import * as React from "react";

const SvgFolders = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 64H400L345.37 9.37c-6-6-14.14-9.37-22.63-9.37H176c-26.51 0-48 21.49-48 48v80H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-80h80c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM480 464c0 8.84-7.16 16-16 16H48c-8.84 0-16-7.16-16-16V176c0-8.84 7.16-16 16-16h80v176c0 26.51 21.49 48 48 48h304v80zm128-128c0 8.84-7.16 16-16 16H176c-8.84 0-16-7.16-16-16V48c0-8.84 7.16-16 16-16h146.74l54.63 54.63c6 6 14.14 9.37 22.63 9.37h192c8.84 0 16 7.16 16 16v224z" />
  </svg>
);

SvgFolders.displayName = "SvgFolders";
SvgFolders.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolders;
