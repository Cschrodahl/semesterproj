import React, { useRef, useState, useEffect } from "react";
import { Anchor, useRender } from "react-zdog";
import { TAU } from "zdog";
import Faces from "./Faces";
import One from "./sides/One";
import Two from "./sides/Two";
import Three from "./sides/Three";
import Four from "./sides/Four";
import Five from "./sides/Five";
import Six from "./sides/Six";
function DiceAnchor({ roll }) {
  const rotation = [
    {
      x: 0,
      y: 0,
      z: 0,
      value: 1,
    },
    {
      x: TAU / 4,
      y: 0,
      z: 0,
      value: 2,
    },
    {
      x: 0,
      y: TAU / 4,
      z: 0,
      value: 3,
    },
    {
      x: 0,
      y: (TAU * 3) / 4,
      z: 0,
      value: 4,
    },
    {
      x: (TAU * 3) / 4,
      y: 0,
      z: 0,
      value: 5,
    },
    {
      x: TAU / 2,
      y: 0,
      z: 0,
      value: 6,
    },
  ];
  let ref = useRef(undefined);
  useRender(() => {
    ref.current.rotate.x = rotation[roll - 1].x + TAU * roll;
    ref.current.rotate.y = rotation[roll - 1].y + TAU * roll;
    ref.current.rotate.z = TAU * roll;
  });
  const [rolled, setRolled] = useState(1);

  useEffect(() => {
    setRolled(roll);
  }, [roll]);
  console.log(roll);
  return (
    <Anchor ref={ref} rolled={rolled} roll={roll}>
      <Faces />
      <One translate={{ z: 30 }} />
      <Two />
      <Three />
      <Four GRotate={{ y: TAU / 4 }} GTranslate={{ x: -30 }} />
      <Five />
      <Six />
    </Anchor>
  );
}
export default DiceAnchor;
/**<Four
        GRotate={{ y: TAU / 4 }}
        GTranslate={{ x: -30 }}
        TRotate1={{ x: 0 }}
        TTranslate1={{ x: 0, y: 10 }}
        TRotate2={{ x: 0 }}
        TTranslate2={{ x: 0, y: -10 }}
      /> 
      
      <Six
        GTranslate={{ z: -30 }}
        TRotate={{ x: 0, z: TAU / 4 }}
        TTranslate={{ x: 0, y: 0 }}
        FRotate={{ y: 0 }}
        FTranslate={{ x: 0 }}
      />*/
