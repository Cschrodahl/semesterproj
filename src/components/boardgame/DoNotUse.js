import { TAU, lerp, easeInOut } from "zdog";
import React, { useRef } from "react";
import {
  Illustration,
  Anchor,
  Rect,
  useRender,
  Ellipse,
  Group
} from "react-zdog";

const rotation = [
  {
    x: 0,
    y: 0,
    value: 1
  },
  {
    x: TAU / 4,
    y: 0,
    value: 2
  },
  {
    x: 0,
    y: TAU / 4,
    value: 3
  },
  {
    x: 0,
    y: (TAU * 3) / 4,
    value: 4
  },
  {
    x: (TAU * 3) / 4,
    y: 0,
    value: 5
  },
  {
    x: TAU / 2,
    y: 0,
    value: 6
  }
];
const rotations = {
  x: 0,
  y: 0,
  z: 0
};
// utility function returning a positive integer up to a maximum value
const randomInt = (max = 6) => Math.floor(Math.random() * max);
// utility function returning a random item from an array
const randomItem = arr => arr[randomInt(arr.length)];
// function animating the dice according to the input x and y values
var roll = 0;
//ancor to add a side
function Sides(x, y) {
  roll = 2;
  x = x + TAU * roll;
  y = y + TAU * roll;
  let duration = 1000;
  let ref = useRef(undefined);
  useRender(() => {
    ref.current.rotate.x = rotations.x;
    ref.current.rotate.y = rotations.y;
    ref.current.rotate.z = rotations.z;
  });

  return (
    <Anchor ref={ref}>
      <One translate={{ z: 30 }} />
      <One translate={{ y: 10 }}>
        <Two />
      </One>
      <One translate={{ y: -10 }}>
        <Two />
      </One>
      <One translate={{ z: 0 }}>
        <Three />
      </One>
      <One translate={{ z: 0, x: 10, y: -10 }}>
        <Three />
      </One>
      <One translate={{ z: 0, x: -10, y: 10 }}>
        <Three />
      </One>
      <Faces />
    </Anchor>
  );
}
function One({ translate }) {
  return (
    <Ellipse
      diameter={15}
      fill={true}
      stroke={false}
      color={"hsl(0, 0%, 100%)"}
      translate={translate}
      value={2}
    />
  );
}
function Two() {
  return <Group rotate={{ x: TAU / 4 }} translate={{ y: 30 }} />;
}
function Three() {
  return <Group rotate={{ y: TAU / 4 }} translate={{ x: 30 }} />;
}
function Faces() {
  return (
    <Group>
      <Side translate={{ z: -15 }} />
      <Side translate={{ y: 15 }} rotate={{ x: TAU / 4 }} />
      <Side translate={{ y: -15 }} rotate={{ x: TAU / 4 }} />
      <Side translate={{ z: 15 }} />
    </Group>
  );
}
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

function Die() {
  return <Sides />;
}

export default function Dice() {
  return (
    <Illustration
      rotate={{ x: (TAU * -35) / 360, y: (TAU * 1) / 8 }}
      element="canvas"
      zoom={1}
    >
      <Die />
    </Illustration>
  );
}
/*
const side = [[-1, -1, 1, 1]];
const middle = [[1, 1, 0]];
const frames = [
  [0, 0],
  [TAU / 4, 0],
  [0, TAU / 4],
  [0, (TAU * 3) / 4],
  [(TAU * 3) / 4, 0],
  [TAU / 2, 0]
];

function Sides({ stroke = 30, color = "lightblue", coords, ...props }) {
  return (
    <Anchor {...props}>
      {coords.map(([x, y, z], index) => (
        <Rect
          key={index}
          width={30}
          height={30}
          color={"#555"}
          stroke={30}
          translate={{ x, y, z }}
        />
      ))}
    </Anchor>
  );
}

function Box() {
  let ticker = 0;
  let cycleCount = 75;
  let turnLimit = frames.length - 1;
  let ref = useRef(undefined);
  useRender(() => {
    let progress = ticker++ / cycleCount;
    let tween = easeInOut(progress % 1, 4);
    let turn = Math.floor(progress % turnLimit);
    ref.current.rotate.x = lerp(frames[turn][0], frames[turn + 1][0], tween);
    ref.current.rotate.y = lerp(frames[turn][1], frames[turn + 1][1], tween);
    ref.current.rotate.z = lerp(frames[turn][2], frames[turn + 1][2], tween);
  });
  return (
    <Anchor ref={ref} scale={8}>
      <Sides coords={side} translate={{ y: 15 }} rotate={{ x: TAU / 4 }} />
      <Sides coords={side} translate={{ y: -15 }} rotate={{ x: TAU / 4 }} />
      <Sides coords={side} translate={{ z: 15 }} />
    </Anchor>
  );
}

export default function Dice() {
  return (
    <Illustration
      rotate={{ x: (TAU * -35) / 360, y: (TAU * 1) / 8 }}
      element="canvas"
      zoom={1}
    >
      <Box />
    </Illustration>
  );
}

/*import React from "react";
import { Illustration, Group, Anchor, Rect, TAU, Ellipse } from "react-zdog";
function Dice({ canvas }) {
  const animation = () => <Illustration element={canvas} />;
  const dice = () => <Anchor addTo={animation} />;
  const faces = () => <Group addTo={dice} />;
  const sides = () => (
    <Rect width={30} height={30} color={"#555"} stroke={30} addTo={faces} />
  );
  const one = () => (
    <Ellipse
      addTo={dice}
      diameter={15}
      stroke={false}
      fill={true}
      color={"hsl(0, 0%, 100%)"}
      translate={{ z: 30 }}
      value={2}
    />
  );
  return (
    <div className="board__dice">
      <canvas id={canvas}></canvas>
    </div>
  );
}
export default Dice;*/
