import * as React from "react";

const SvgRecordVinyl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216zm0-320a104 104 0 10104 104 104 104 0 00-104-104zm0 176a72 72 0 1172-72 72.08 72.08 0 01-72 72zm0-96a24 24 0 1024 24 24 24 0 00-24-24z" />
  </svg>
);

SvgRecordVinyl.displayName = "SvgRecordVinyl";
SvgRecordVinyl.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRecordVinyl;
