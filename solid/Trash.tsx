import * as React from "react";

const SvgTrash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z" />
  </svg>
);

SvgTrash.displayName = "SvgTrash";
SvgTrash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrash;
