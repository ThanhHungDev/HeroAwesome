import * as React from "react";

const SvgScrollOld = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M539.31 228.69L512 256l27.31 27.31a16 16 0 014.69 11.32V384h-89.37a16 16 0 00-11.32 4.69L416 416l-27.31-27.31a16 16 0 00-11.32-4.69H304a16 16 0 00-16 16v32a80 80 0 01-80.61 80c-44.11-.33-79.39-36.89-79.39-81V262.63a16 16 0 014.69-11.32L160 224l-27.31-27.31a16 16 0 01-4.69-11.32V65A65 65 0 0063 0h385a96.1 96.1 0 0195.68 88.2 16.15 16.15 0 01-4.63 12.8L512 128l27.31 27.31a16 16 0 014.69 11.32v50.74a16 16 0 01-4.69 11.32z"
      opacity={0.4}
    />
    <path
      d="M192 512h16c-2.59 0-5.14-.13-7.66-.37-2.75.24-5.53.37-8.34.37zM64 0A64 64 0 000 64v48a16 16 0 0016 16h112V65A65 65 0 0064 0zm560 384H454.63a16 16 0 00-11.32 4.69L416 416l-27.31-27.31a16 16 0 00-11.32-4.69H304a16 16 0 00-16 16v32a80 80 0 01-80 80h320a112 112 0 00112-112.06A16 16 0 00624 384z"
      className="scroll-old_svg__fa-primary"
    />
  </svg>
);

SvgScrollOld.displayName = "SvgScrollOld";
SvgScrollOld.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScrollOld;
