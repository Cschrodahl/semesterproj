import React, { useRef, useState, useEffect } from "react";
import { Anchor, useRender } from "react-zdog";
import { TAU, easeInOut, lerp } from "zdog";
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
  /*console.log(roll);
  let ref = useRef(undefined);
  let ticker = 10;
  let cycleCount = 150;
  let test = rotation.length - 1;
  useRender(() => {
    let progress = ticker / cycleCount;
    let tween = easeInOut(progress % 1, 3);
    ref.current.rotate.x = lerp(test, rotation[roll - 1].x, tween);
    ref.current.rotate.y = lerp(test, rotation[roll - 1].y, tween);
    ref.current.rotate.z = lerp(test, rotation[roll - 1].z, tween);
  });*/
  const [rolled, setRolled] = useState(1);

  const requestRef = useRef(undefined);

  const animate = (time) => {
    requestRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    setRolled(roll);
    ref.current.rotate.x = rotation[roll - 1] * roll;
    //requestRef.current = requestAnimationFrame(animate);
    //return () => cancelAnimationFrame(requestRef.current);
  }, []);
  return (
    <Anchor ref={ref} rolled={rolled} roll={roll}>
      <Faces />
      <One translate={{ z: 30 }} />
      <Two
        rotate={{ x: TAU / 4 }}
        translate={{ y: 30 }}
        OneCopy1={{ y: 10 }}
        OneCopy2={{ y: -10 }}
      />
      <Three />
      <Four
        GRotate={{ y: TAU / 4 }}
        GTranslate={{ x: -30 }}
        TRotate1={{ x: 0 }}
        TTranslate1={{ x: -10, y: 10 }}
      />
      <Five />
      <Six
        GTranslate={{ z: 30 }}
        TRotate={{ x: 0, z: TAU / 4 }}
        TTranslate={{ x: 0, y: 0 }}
        FRotate={{ y: 0 }}
        FTranslate={{ x: 0 }}
      />
    </Anchor>
  );
}
export default DiceAnchor;
