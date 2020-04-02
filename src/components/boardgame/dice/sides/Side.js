import React from "react";
import { Rect } from "react-zdog";
function Side({ translate, rotate }) {
  return (
    <Rect
      width={30}
      height={30}
      color={"#d60000"}
      stroke={30}
      translate={translate}
      rotate={rotate}
    />
  );
}
export default Side;
