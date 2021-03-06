import * as React from "react";

const SvgFileEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM242.4 323.6l-95 95-48.2 5.4a9.93 9.93 0 01-2.2 0 10.17 10.17 0 01-9-11.2l5.4-48.2 95-95a5.07 5.07 0 017.17 0l46.8 46.8a5.07 5.07 0 01.03 7.2zm55.7-55.7l-26 26a5.07 5.07 0 01-7.17 0l-46.8-46.8a5.07 5.07 0 010-7.17l26-26a20.22 20.22 0 0128.6 0l25.4 25.4a20.22 20.22 0 01-.03 28.57z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM242.4 316.4l-46.8-46.8a5.07 5.07 0 00-7.17 0l-95 95L88 412.8a10.17 10.17 0 009 11.2 9.93 9.93 0 002.18 0l48.2-5.4 95-95a5.07 5.07 0 000-7.17zm55.7-77.1l-25.4-25.4a20.22 20.22 0 00-28.6 0l-26 26a5.07 5.07 0 000 7.17l46.8 46.8a5.07 5.07 0 007.17 0l26-26a20.22 20.22 0 000-28.6z"
      className="file-edit_svg__fa-primary"
    />
  </svg>
);

SvgFileEdit.displayName = "SvgFileEdit";
SvgFileEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileEdit;
