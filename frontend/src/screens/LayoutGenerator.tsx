import React, { useState, useEffect } from "react";
import LayoutDraggable from "../components/layoutDraggable";
function LayoutGenerator() {
  const [dropList, setDropList] = useState<any>([]);

  const successDropEvent = (e: any) => {
    setDropList([...dropList, e]);
  };

  const removeFromDropList = (e: any) => {
    const newData = dropList.filter((object: any) => {
      return object.id !== e.id;
    });
    setDropList(newData);
  };

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

        <div className="custom-row flex-wrap m-0 p-0">
          <LayoutDraggable size={"col-sm"} onSuccessDrop={successDropEvent} />
          <LayoutDraggable size={"col-sm"} onSuccessDrop={successDropEvent} />
          <LayoutDraggable size={"col-sm"} onSuccessDrop={successDropEvent} />
          <LayoutDraggable size={"col-sm-8"} onSuccessDrop={successDropEvent} />
          <LayoutDraggable size={"col-sm-4"} onSuccessDrop={successDropEvent} />
          <LayoutDraggable size={"col-sm-6"} onSuccessDrop={successDropEvent} />
          <LayoutDraggable size={"col-sm-6"} onSuccessDrop={successDropEvent} />
        </div>
      </div>
      <div
        className={`component-container component-drop ${
          dropList.length !== 0 ? "component-drop-active" : ""
        }`}
        style={{ marginTop: 50 }}
      >
        <div className={`grid-drop`}>
          <div className="custom-ow m-0 p-0">
            <p className="grid-drop-text">Drop in here!</p>
            {dropList.map((item: any, index: number) => (
              <div
                className={`${item.size} col-card-container`}
                key={item.id}
                onClick={() => removeFromDropList(item)}
              >
                <div className="col-card handle">
                  <p className="col-card-text">{item.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`component-container ${
          dropList.length == 0 ? "d-none" : ""
        }`}
        style={{ marginTop: 50 }}
      >
        &lt;div class="custom-row"&gt;
        {dropList.map((item: any, index: number) => (
          <div className="rendered-code">
            &lt;div class="{item.size}"&gt;{item.size}&lt;/div&gt;
          </div>
        ))}
        &lt;/div&gt;
      </div>
    </div>
  );
}

export default LayoutGenerator;
