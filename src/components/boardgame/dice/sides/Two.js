import React from "react";
import { Group } from "react-zdog";
import { TAU } from "zdog";
import One from "./One";
function Two({ OneRotate1, OneRotate2 }) {
  return (
    <Group rotate={{ x: TAU / 4 }} translate={{ y: 30 }}>
      <One translate={{ y: 10 }} rotate={OneRotate1} />
      <One translate={{ y: -10 }} rotate={OneRotate2} />
    </Group>
  );
}

export default Two;
