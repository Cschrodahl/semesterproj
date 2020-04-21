import React from "react";
import { Group } from "react-zdog";
//import Four from "./Four";
//import Two from "./Two";
import One from "./One";
function Six(GTranslate, TRotate, TTranslate, FRotate, FTranslate) {
  return (
    <Group translate={{ z: -30 }}>
      <One translate={{ y: 10, x: 10 }} />
      <One translate={{ y: 0, x: 10 }} />
      <One translate={{ y: -10, x: -10 }} />
      <One translate={{ y: 0, x: -10 }} />
      <One translate={{ y: 10, x: -10 }} />
      <One translate={{ y: -10, x: 10 }} />
    </Group>
  );
}
//<Two rotate={TRotate} translate={TTranslate} />
export default Six;
