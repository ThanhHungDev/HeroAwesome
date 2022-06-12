import * as React from "react";

const SvgChessBoard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 256v-64h-64v64zM448 0h-64v64h64zm64 128V64h-64v64zm-256 64h-64v64h64zM320 0h-64v64h64zm192 384v-64h-64v64zm0 128v-64h-64v64zM256 128V64h-64v64zM64 512h64v-64H64zm128 0h64v-64h-64zM0 384v64h64v-64zm320 128h64v-64h-64zM0 128v64h64v-64zM0 0v64h64V0zm0 256v64h64v-64zM192 0h-64v64h64zm192 320h64v-64h-64zm-128-64v64h64v-64zm-128-64H64v64h64zm64 128v64h64v-64zm128 0v64h64v-64zm-192 0H64v64h64zm0-256H64v64h64zm256 128h64v-64h-64zM128 384v64h64v-64zm192-128h64v-64h-64zm128 128h-64v64h64zM192 256h-64v64h64zm128-64v-64h-64v64zm-64 192v64h64v-64zm128-256V64h-64v64zm-192 0h-64v64h64z"
      opacity={0.4}
    />
    <path
      d="M256 0h-64v64h64zM0 64v64h64V64zM128 0H64v64h64zm64 256v64h64v-64zM0 192v64h64v-64zM384 0h-64v64h64zm128 0h-64v64h64zM128 256H64v64h64zm384 192v-64h-64v64zm0-128v-64h-64v64zM384 512h64v-64h-64zm128-320v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm256 0h64v-64h-64zM0 320v64h64v-64zm320-192V64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-128h64v-64h-64zm0 192v64h64v-64zm-256 0v64h64v-64zm128-256V64h-64v64zm192 256h64v-64h-64zM256 192v-64h-64v64zM384 64v64h64V64zM256 320v64h64v-64zm-64-128h-64v64h64zm192 64h64v-64h-64zM128 128H64v64h64zm0 192v64h64v-64z"
      className="chess-board_svg__fa-primary"
    />
  </svg>
);

SvgChessBoard.displayName = "SvgChessBoard";
SvgChessBoard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessBoard;
