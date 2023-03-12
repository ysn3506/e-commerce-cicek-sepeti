import * as React from "react";

const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18.047}
    height={19.681}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path className="a" d="M0 0h18.047v19.681H0z" />
      </clipPath>
      <style>{".a{fill:#555}"}</style>
    </defs>
    <path
      className="a"
      d="m17.788 18.01-3.61-3.989a8.334 8.334 0 1 0-1.563 1.253l3.691 4.078a1 1 0 1 0 1.482-1.342m-9.525-3.484a6.263 6.263 0 1 1 6.263-6.263 6.271 6.271 0 0 1-6.263 6.263"
      style={{
        clipPath: "url(#a)",
      }}
    />
  </svg>
);

export default SearchIcon;
