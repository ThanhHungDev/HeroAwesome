import * as React from "react";

const SvgScannerKeyboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M400 96H16c-8.8 0-16 7.2-16 16v137.4c0 4.2 1.7 8.3 4.7 11.3L32 288v176c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V288l27.3-27.3c3-3 4.7-7.1 4.7-11.3V112c0-8.8-7.2-16-16-16zM192 440c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v48zm0-96c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v48zm128 96c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v48zm0-96c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v48zm32-128c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8v48zM256 8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h64V8zm152-8h-48c-4.4 0-8 3.6-8 8v56h64V8c0-4.4-3.6-8-8-8zm160 0h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zM320 8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v56h32V8zm152-8h-16c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgScannerKeyboard.displayName = "SvgScannerKeyboard";
SvgScannerKeyboard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScannerKeyboard;
