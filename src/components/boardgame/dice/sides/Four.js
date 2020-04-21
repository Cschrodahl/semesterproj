import React from "react";
import { Group } from "react-zdog";
//import Two from "./Two";
import One from "./One";
function Four({ GRotate, GTranslate }) {
  return (
    <Group rotate={GRotate} translate={GTranslate}>
      <One translate={{ y: 10, x: 10 }} />
      <One translate={{ y: -10, x: -10 }} />
      <One translate={{ y: 10, x: -10 }} />
      <One translate={{ y: -10, x: 10 }} />
    </Group>
  );
}

export default Four;
