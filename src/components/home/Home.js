import React from "react";
import Heading from "./Heading";
import HomeModal from "./HomeModal";
export function Home() {
  localStorage.clear();
  return (
    <main className="container">
      <Heading
        Header1="WELCOME TO"
        Header2="KINGDOM OF KNIGHTS"
        Logo="./img/logo-03.png"
        IntroText="Battle with your friends and see if you can become you favorit
          character. Show your opponent who is the best! Remember to avoid all
          the red tiles to get ahead of your opponent. Click play now and choose
          your character"
      />
      <HomeModal></HomeModal>
    </main>
  );
}

export default Home;
