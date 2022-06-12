import * as React from "react";

const SvgUserVisor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M98.506 152.846a127.913 127.913 0 00250.988.002C360.373 145.69 368 133.973 368 120v-16c0-19.574-14.387-35.146-32.98-38.58C313.049 26.547 271.834 0 224 0s-89.047 26.547-111.018 65.42C94.39 68.854 80 84.426 80 104v16c0 13.97 7.627 25.691 18.506 32.846zM224 224c-41.633 0-76.834-26.846-90.096-64h180.192c-13.262 37.154-48.463 64-90.096 64zm0-192c28.24 0 53.422 12.506 71.01 32H152.99c17.588-19.494 42.77-32 71.01-32zm-112 72a8.015 8.015 0 018-8h208a8.015 8.015 0 018 8v16a8.015 8.015 0 01-8 8H120a8.015 8.015 0 01-8-8zm210.875 248h-.125a3.97 3.97 0 00-3.031 1.39c-19.813 22.985-31.813 53.094-35.688 89.5a3.998 3.998 0 006.438 3.579c24.844-19.328 33.75-23.813 37.031-24.813a6.629 6.629 0 011.375-.375c2.625 2.328 8.188 8.578 19.875 25.031A3.945 3.945 0 00352 448a4.064 4.064 0 001.281-.203 4.012 4.012 0 002.719-3.922c-1.156-35.328-11.281-65.703-30.063-90.297a4.02 4.02 0 00-3.062-1.578zm-9.281-64c-28.688 0-42.5 16-89.594 16s-60.813-16-89.594-16A134.431 134.431 0 000 422.406V464a48.012 48.012 0 0048 48h352a48.012 48.012 0 0048-48v-41.594A134.431 134.431 0 00313.594 288zM416 464a16.041 16.041 0 01-16 16H48a16.041 16.041 0 01-16-16v-41.594A102.48 102.48 0 01134.406 320C154 320 173.5 336 224 336c50.406 0 70-16 89.594-16A102.48 102.48 0 01416 422.406z" />
  </svg>
);

SvgUserVisor.displayName = "SvgUserVisor";
SvgUserVisor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserVisor;