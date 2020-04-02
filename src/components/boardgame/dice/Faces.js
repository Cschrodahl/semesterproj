import React from "react";
import { TAU } from "zdog";
import { Group } from "react-zdog";
import Side from "./sides/Side";
function Faces() {
  return (
    <Group>
      <Side translate={{ z: -15 }} />
      <Side translate={{ y: 15 }} rotate={{ x: TAU / 4 }} />
      <Side translate={{ y: -15 }} rotate={{ x: TAU / 4 }} />
      <Side translate={{ z: 15 }} />
    </Group>
  );
}
export default Faces;
