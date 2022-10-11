import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
function LayoutDraggable({ size, onSuccessDrop }: any) {
  const [isBeingMoved, setIsBeingMoved] = useState<boolean>(false);

  const dropEvt = (e: any) => {
    if (
      e.target.classList[0] === "grid-drop" ||
      e.target.classList[0] === "grid-drop-text"
    ) {
      onSuccessDrop({
        id: Math.random().toString(36).substr(2, 9),
        size: size,
      });
    }
    setIsBeingMoved(false);
  };

  return (
    <div
      className={`${size} m-0 p-0 col-card-container`}
      id={isBeingMoved ? "being-moved-element" : ""}
    >
      <Draggable
        handle=".handle"
        onDrag={() => setIsBeingMoved(true)}
        onStop={(e) => dropEvt(e)}
        position={{ x: 0, y: 0 }}
      >
        <div className="col-card handle">
          <p className="col-card-text">{size}</p>
        </div>
      </Draggable>
    </div>
  );
}

export default LayoutDraggable;
