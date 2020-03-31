import React from "react";
import HomeModal from "./HomeModal";
export function Home() {
  return (
    <main className="container">
      <header>
        <h1>WELCOME TO</h1>
        <h2>KINGDOM OF KNIGHTS</h2>
        <img src="./img/logo-03.png" alt="logo" />
        <p>
          Battle with your friends and see if you can become you favorit
          character. Show your opponent who is the best! Remember to avoid all
          the red tiles to get ahead of your opponent. Click play now and choose
          your character
        </p>
        <HomeModal></HomeModal>
      </header>
    </main>
  );
}

export default Home;
