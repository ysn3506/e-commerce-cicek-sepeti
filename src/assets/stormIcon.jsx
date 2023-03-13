import * as React from "react";

const StormIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8.272}
    height={13.131}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h8.272v13.131H0z"
        />
      </clipPath>
    </defs>
    <g
      style={{
        clipPath: "url(#a)",
      }}
    >
      <path
        d="M7.8 5.214H5.2L6.143.566A.473.473 0 0 0 5.3.192L.094 7.166a.467.467 0 0 0 .091.653.459.459 0 0 0 .283.094h2.6l-.937 4.653a.473.473 0 0 0 .844.374l5.2-6.988a.457.457 0 0 0-.375-.738"
        style={{
          fill: "#ffce03",
        }}
      />
    </g>
  </svg>
);

export default StormIcon;
