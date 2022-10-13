import React, { useState, useEffect } from "react";
import LayoutDraggable from "../components/layoutDraggable";
import Alert from "../components/Alert";
function LayoutGenerator() {
  const [dropList, setDropList] = useState<any>([]);
  const [alertStatus, setAlertStatus] = useState<boolean>(false);
  let copyDropList = "";
  const successDropEvent = (e: any) => {
    setDropList([...dropList, e]);
  };

  const removeFromDropList = (e: any) => {
    const newData = dropList.filter((object: any) => {
      return object.id !== e.id;
    });
    setDropList(newData);
  };

  useEffect(() => {
    copyDropList = "<div class='row'> \n";
    for (let s of dropList) {
      copyDropList += `\n    <div class='${s.size}'>\n\n    </div>`;
    }
    copyDropList += "\n\n</div>";
  }, [dropList]);

  const copyCode = () => {
    setAlertStatus(true);
    navigator.clipboard.writeText(copyDropList);
    setTimeout(() => {
      setAlertStatus(false);
    }, 2000);
  };

  return (
    <div>
      <Alert
        title={"Code has been copied to clipboard"}
        variant={"success"}
        show={alertStatus}
      />
      <div className="component-container">
        <h2>Layout generator</h2>
        <p>This is main page of bootstrap tools</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          eos impedit. Quibusdam ducimus voluptatem provident quo earum autem
          enim, in ipsam nam voluptas pariatur rerum quam vero illo ut sequi.
        </p>

        <div
          className="custom-row flex-wrap m-0 p-0"
          style={{ justifyContent: "space-between", gap: 10 }}
        >
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
        style={{ marginTop: 50, marginBottom: 70 }}
      >
        <div className="palette-nav-menu">
          <button className="palette-button" onClick={() => copyCode()}>
            Copy
          </button>
          <button className="palette-button" onClick={() => setDropList([])}>
            Clear
          </button>
        </div>
        &lt;div class="row"&gt;
        {dropList.map((item: any, index: number) => (
          <div className="rendered-code" key={index}>
            &lt;div class="{item.size}"&gt;{item.size}&lt;/div&gt;
          </div>
        ))}
        &lt;/div&gt;
      </div>
    </div>
  );
}

export default LayoutGenerator;
