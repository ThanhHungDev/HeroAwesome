import * as React from "react";

const SvgTrashRestoreAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M32 96v368a48 48 0 0048 48h288a48 48 0 0048-48V96zm281.37 192H256v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V288h-57.37c-14.26 0-21.4-18.18-11.32-28.8l89.38-94.26a15.41 15.41 0 0121.78-.84q.43.41.84.84l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8z"
      opacity={0.4}
    />
    <path
      d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM235.31 164.94q-.41-.44-.84-.84a15.41 15.41 0 00-21.78.84l-89.38 94.26c-10.08 10.62-2.94 28.8 11.32 28.8H192v112a16 16 0 0016 16h32a16 16 0 0016-16V288h57.37c14.26 0 21.4-18.18 11.32-28.8z"
      className="trash-restore-alt_svg__fa-primary"
    />
  </svg>
);

SvgTrashRestoreAlt.displayName = "SvgTrashRestoreAlt";
SvgTrashRestoreAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrashRestoreAlt;
