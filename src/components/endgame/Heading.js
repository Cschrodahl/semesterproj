import React from "react";

export function Heading({
  Header1,
  Header2,
  Logo,
  OutroText,
  player,
  restart,
}) {
  return (
    <header>
      <h1>
        {Header1} {player}
      </h1>
      <h2>{Header2}</h2>
      <img src={Logo} alt="logo" />
      <p>{OutroText}</p>
      <button onClick={() => (window.location.href = "/")}>{restart}</button>
    </header>
  );
}

export default Heading;
