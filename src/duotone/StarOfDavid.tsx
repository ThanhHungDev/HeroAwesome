import * as React from "react";

const SvgStarOfDavid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 464 512" {...props}>
    <path
      d="M176 344h-.07l-44-73.93L71 168h39.72l33.33-56H37.11c-28.6 0-46.42 30.38-32 54.59l56.6 95.08L91 310.55l-.09.14L110.72 344zm160.17-80.7L288.12 344h-.07l-33.4 56h.13L232 438.25 209.22 400h-65.17L200 494a37.44 37.44 0 0064 0l56-94h-.19L353 344h.3l19.85-33.33L340.52 256zM426.89 112H209.35L176 168h217l-19.88 33.33L405.68 256l53.21-89.4c14.41-24.19-3.41-54.58-32-54.58z"
      opacity={0.4}
    />
    <path
      d="M91 310.55L58.32 256 5.11 345.41C-9.3 369.62 8.52 400 37.11 400h217.46l33.28-56H71zm36.86-61.83l48-80.7h.14l33.39-56h-.13L232 73.78 254.78 112h65.16L264 18a37.44 37.44 0 00-64 0L90.88 201.32 123.5 256zm331.06 96.69L353.28 168h-65.21l44 73.93L393 344h-40l-33.22 56h107.11c28.6 0 46.42-30.36 32-54.57z"
      className="star-of-david_svg__fa-primary"
    />
  </svg>
);

SvgStarOfDavid.displayName = "SvgStarOfDavid";
SvgStarOfDavid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarOfDavid;
