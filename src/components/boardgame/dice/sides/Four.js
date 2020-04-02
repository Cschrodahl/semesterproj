import React from "react";
import { Group } from "react-zdog";
import Two from "./Two";
function Four({
  GRotate,
  GTranslate,
  TRotate1,
  TTranslate1,
  TRotate2,
  TTranslate2
}) {
  return (
    <Group rotate={GRotate} translate={GTranslate}>
      <Two OneRotate1={TRotate1} OneCopy1={TTranslate1} />
      <Two OneRotate1={TRotate2} OneCopy2={TTranslate2} />
    </Group>
  );
}
export default Four;
