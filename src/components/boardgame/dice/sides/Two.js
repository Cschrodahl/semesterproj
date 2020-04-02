import React from "react";
import { Group } from "react-zdog";
//import { TAU } from "zdog";
import One from "./One";
function Two({
  translate,
  rotate,
  OneCopy1,
  OneCopy2,
  OneRotate1,
  OneRotate2
}) {
  return (
    <Group rotate={rotate} translate={translate}>
      <One translate={OneCopy1} rotate={OneRotate1} />
      <One translate={OneCopy2} rotate={OneRotate2} />
    </Group>
  );
}

export default Two;
