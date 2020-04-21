import React from "react";
import { Ellipse } from "react-zdog";
function One({ translate, rotate }) {
  return (
    <Ellipse
      diameter={11}
      fill={true}
      stroke={false}
      color={"hsl(0, 0%, 100%)"}
      translate={translate}
      rotate={rotate}
      value={2}
    />
  );
}
export default One;
