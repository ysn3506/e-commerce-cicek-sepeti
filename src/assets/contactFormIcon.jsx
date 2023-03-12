import * as React from "react";

const ContactFormIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={27} {...props}>
    <g transform="translate(.446 -.076)">
      <ellipse
        cx={14}
        cy={13.5}
        rx={14}
        ry={13.5}
        transform="translate(-.446 .076)"
        style={{
          fill: "#e37c33",
        }}
      />
      <path
        d="M.113 10.5a.378.378 0 0 1-.1-.369l.86-3.094a1.989 1.989 0 0 1 .524-.9L7.253.276a.98.98 0 0 1 1.364 0L10.337 2a.97.97 0 0 1 0 1.363L4.482 9.227a2 2 0 0 1-.9.525l-3.1.849a.3.3 0 0 1-.1.012.391.391 0 0 1-.269-.113Z"
        transform="translate(9.657 8.355)"
        style={{
          fill: "#fff",
          stroke: "transparent",
          strokeMiterlimit: 10,
        }}
      />
    </g>
  </svg>
);

export default ContactFormIcon;
