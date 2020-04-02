import React from "react";
import { Group } from "react-zdog";
import { TAU } from "zdog";
import Four from "./Four";
import One from "./One";
function Five() {
  return (
    <Group rotate={{ x: TAU / 4 }} translate={{ y: -30 }}>
      <Four
        GRotate={{ y: 0 }}
        GTranslate={{ x: 0 }}
        TRotate1={{ x: 0 }}
        TTranslate1={{ x: 10, y: 0 }}
        TRotate2={{ x: 0 }}
        TTranslate2={{ x: -10, y: 0 }}
      />
      <One translate={{ z: 0 }} />
    </Group>
  );
}
export default Five;
