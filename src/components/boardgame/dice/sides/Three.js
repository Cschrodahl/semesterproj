import React from "react";
import { Group } from "react-zdog";
import { TAU } from "zdog";
import One from "./One";
function Three() {
  return (
    <Group rotate={{ y: TAU / 4 }} translate={{ x: 30 }}>
      <One translate={{ z: 0 }} />
      <One translate={{ x: 10, y: -10, z: 0 }} />
      <One translate={{ x: -10, y: 10, z: 0 }} />
    </Group>
  );
}
export default Three;
