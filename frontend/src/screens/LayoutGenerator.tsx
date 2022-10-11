import React, { useState, useEffect } from "react";
import LayoutDraggable from "../components/layoutDraggable";
function LayoutGenerator() {
  const [dropList, setDropList] = useState<any>([]);

  // const successDropEvent = () => {
  //   setDropList([...dropList, "as"]);
  // };

  const text = () => alert("test");
  return (
    <div>
      <div className="component-container">
        <h2>Layout generator</h2>
        <p>This is main page of bootstrap tools</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          eos impedit. Quibusdam ducimus voluptatem provident quo earum autem
          enim, in ipsam nam voluptas pariatur rerum quam vero illo ut sequi.
        </p>

        <div className="row m-0 p-0">
          <LayoutDraggable size={"col-sm"} onSuccessDrop={text} />
          <LayoutDraggable size={"col-sm"} />
          <LayoutDraggable size={"col-sm"} />
          <LayoutDraggable size={"col-sm-8"} />
          <LayoutDraggable size={"col-sm-4"} />
          <LayoutDraggable size={"col-sm-6"} />
          <LayoutDraggable size={"col-sm-6"} />
        </div>
      </div>
      <div
        className={`component-container component-drop ${
          dropList.length > 0 ? "component-drop-active" : ""
        }`}
        style={{ marginTop: 50 }}
      >
        <div className={`grid-drop`}>
          <p className="grid-drop-text">Drop in here!</p>
        </div>
      </div>
    </div>
  );
}

export default LayoutGenerator;
