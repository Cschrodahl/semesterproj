import React from "react";
import { Illustration } from "react-zdog";
import DiceAnchor from "./DiceAnchor";
export default function Dice({ roll }) {
  return (
    <Illustration rotate={{ x: 0, y: 0, z: 0 }} element="canvas" zoom={1}>
      <DiceAnchor roll={roll} />
    </Illustration>
  );
}
