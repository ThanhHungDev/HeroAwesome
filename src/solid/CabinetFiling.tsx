import * as React from "react";

const SvgCabinetFiling = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 0H32C14.33 0 0 14.33 0 32v192h512V32c0-17.67-14.33-32-32-32zM352 152c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24H192v24c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-40c0-8.84 7.16-16 16-16h160c8.84 0 16 7.16 16 16v40zM0 480c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V256H0v224zm160-112c0-8.84 7.16-16 16-16h160c8.84 0 16 7.16 16 16v40c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24H192v24c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-40z" />
  </svg>
);

SvgCabinetFiling.displayName = "SvgCabinetFiling";
SvgCabinetFiling.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCabinetFiling;
