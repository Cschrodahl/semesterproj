import React from "react";

export function Heading({ Header1, Header2, Logo, IntroText }) {
  return (
    <header>
      <h1>{Header1}</h1>
      <h2>{Header2}</h2>
      <img src={Logo} alt="logo" />
      <p>{IntroText}</p>
      <button
        onClick={() => {
          document.getElementById("modal").style.display = "block";
        }}
      >
        Choose
      </button>
    </header>
  );
}

export default Heading;
