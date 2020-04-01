import React from "react";
function Tiles({ data, index }) {
  return (
    <div className="board__tile" data-p={data}>
      {index}
    </div>
  );
}
export default Tiles;
