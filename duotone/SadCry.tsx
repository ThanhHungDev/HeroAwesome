import * as React from "react";

const SvgSadCry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M365 474.72l2.52-1.37zm-2.2 1.16l-2.46 1.28zm-13.92 6.74l2.51-1.13zm7.32-3.4l-2.46 1.17zM496 256a247.82 247.82 0 01-120.18 212.57l.18-.1V288a16 16 0 00-32 0v196.74a248.88 248.88 0 01-192 0V288a16 16 0 00-32 0v180.47h.06A247.81 247.81 0 010 256C0 119 111 8 248 8s248 111 248 248zm-303.8-23a12 12 0 0019.8-10.8c-4-25.2-34.2-42.1-59.9-42.1S96.2 197 92.2 222.2A12 12 0 00112 233l9.5-8.5c14.8-13.2 46.2-13.2 61 0zM296 352c0-35.3-21.5-64-48-64s-48 28.7-48 64 21.5 64 48 64 48-28.7 48-64zm108-129.8c-4-25.2-34.2-42.1-59.9-42.1s-55.9 16.9-59.9 42.1A12 12 0 00304 233l9.6-8.6c14.8-13.2 46.2-13.2 61 0l9.5 8.5a11.92 11.92 0 0013.7 1.6 12.36 12.36 0 006.2-12.3zm-60 262.54l2.42-1zm-215.52-11.39l2.52 1.37zm4.72 2.53l2.46 1.28zm-6.81-3.7c-.83-.47-1.67-.93-2.5-1.41.83.48 1.67.94 2.5 1.41zm13.42 7c.81.4 1.63.78 2.45 1.17-.82-.35-1.64-.73-2.45-1.13zm232.3-8.45c-.83.48-1.67.94-2.5 1.41.83-.43 1.67-.89 2.5-1.37zm-227.5 10.72l2.51 1.13zm7.39 3.25l-2.42-1z"
      opacity={0.4}
    />
    <path
      d="M152.1 180.1c-25.7 0-55.9 16.9-59.9 42.1A12 12 0 00112 233l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.7 8.5a12 12 0 0019.8-10.8c-4-25.2-34.2-42.1-59.9-42.1zM404 222.2c-4-25.2-34.2-42.1-59.9-42.1s-55.9 16.9-59.9 42.1A12 12 0 00304 233l9.6-8.6c14.8-13.2 46.2-13.2 61 0l9.5 8.5a11.92 11.92 0 0013.7 1.6 12.36 12.36 0 006.2-12.3zM360 272a16 16 0 00-16 16v196.74a247.25 247.25 0 0032-16.27V288a16 16 0 00-16-16zm-224 0a16 16 0 00-16 16v180.47a247.25 247.25 0 0032 16.27V288a16 16 0 00-16-16z"
      className="sad-cry_svg__fa-primary"
    />
  </svg>
);

SvgSadCry.displayName = "SvgSadCry";
SvgSadCry.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSadCry;
