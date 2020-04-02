import React from "react";
import { Group } from "react-zdog";
import Four from "./Four";
import Two from "./Two";
function Six(GTranslate, TRotate, TTranslate, FRotate, FTranslate) {
  return (
    <Group translate={GTranslate}>
      <Two rotate={TRotate} translate={TTranslate} />
      <Four rotate={FRotate} translate={FTranslate} />
    </Group>
  );
}
export default Six;
