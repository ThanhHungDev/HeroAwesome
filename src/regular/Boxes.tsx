import * as React from "react";

const SvgBoxes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 224H480V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v176H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM208 48h64v90.7l48-21.3 48 21.3V48h64v176H208V48zm88 416H48V272h80v90.7l48-21.3 48 21.3V272h72v192zm296 0H344V272h72v90.7l48-21.3 48 21.3V272h80v192z" />
  </svg>
);

SvgBoxes.displayName = "SvgBoxes";
SvgBoxes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxes;
