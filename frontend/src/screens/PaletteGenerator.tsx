import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";
function PaletteGenerator() {
  let colorOutput: string = "";
  let backgroundOutput: string = "";
  const [copyAlertStatus, setCopyAlertStatus] = useState<boolean>(false);
  const [showResultMax, setShowResultMax] = useState<boolean>(true);
  const [colorPalette, setColorPalette] = useState<any[]>([
    { color: "#3B71CA", name: "primary" },
    { color: "#9FA6B2", name: "secondary" },
    { color: "#14A44D", name: "success" },
    { color: "#DC4C64", name: "danger" },
    { color: "#E4A11B", name: "warning" },
    { color: "#54B4D3", name: "info" },
    { color: "#FBFBFB", name: "light" },
    { color: "#332D2D", name: "dark" },
    { color: "#292b2c", name: "muted" },
    { color: "#ffffff", name: "white" },
  ]);

  const changeColor = (e: any) => {
    const color = e.target.value;
    const name = e.target.id.replace("input-", "");
    const index = colorPalette.findIndex((item) => item.name === name);
    const newColorPalette = [...colorPalette];
    newColorPalette[index] = { color, name };
    setColorPalette(newColorPalette);
  };

  const saveColorsAsCss = () => {
    const element = document.createElement("a");
    const file = new Blob(["testovain"], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const copyEvent = (option: number) => {
    setCopyAlertStatus(true);
    switch (option) {
      case 1:
        navigator.clipboard.writeText(colorOutput);
        break;
      case 2:
        navigator.clipboard.writeText(backgroundOutput);
        break;
      case 3:
        navigator.clipboard.writeText(`${colorOutput} \n ${backgroundOutput}`);
        break;
    }
    setTimeout(() => {
      setCopyAlertStatus(false);
    }, 2000);
  };

  useEffect(() => {
    colorOutput = "";
    backgroundOutput = "";
    for (let s of colorPalette) {
      colorOutput += `
      .text-${s.name}{
         color: ${s.color} !important;
      }
      `;
      backgroundOutput += `
      .bg-${s.name}{
         background-color: ${s.color} !important;
      }
      `;
    }
  }, [colorPalette]);

  return (
    <div>
      <Alert
        status={copyAlertStatus}
        title="Copied to clipboard"
        variant={"success"}
        show={copyAlertStatus}
      />
      <div className="component-container">
        <h2>Palette tool</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          obcaecati voluptate perferendis, soluta aperiam odio mollitia nostrum
          provident sed qui non perspiciatis labore totam eos natus quasi odit
          earum quibusdam?
        </p>

        <div className="custom-row">
          <div className="custom-col">
            {colorPalette
              .slice(0, colorPalette.length / 2)
              .map((color: any, index: number) => (
                <div className="color-input-container" key={index}>
                  <input
                    type="color"
                    value={color.color}
                    id={`input-${color.name}`}
                    className="color-input"
                    onChange={(e: any) => changeColor(e)}
                  />
                  <label
                    htmlFor={`input-${color.name}`}
                    className="color-input-label"
                  >
                    {color.name}
                  </label>
                  <span style={{ color: "#c8c8c8" }}>{color.color}</span>
                </div>
              ))}
          </div>
          <div className="custom-col">
            {colorPalette
              .slice(colorPalette.length / 2, colorPalette.length)
              .map((color: any, index: number) => (
                <div className="color-input-container" key={index}>
                  <input
                    type="color"
                    value={color.color}
                    id={`input-${color.name}`}
                    onChange={(e: any) => changeColor(e)}
                    className="color-input"
                  />
                  <label
                    htmlFor={`input-${color.name}`}
                    className="color-input-label"
                  >
                    {color.name}
                  </label>
                  <span style={{ color: "#c8c8c8" }}>{color.color}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className="component-container"
        style={{ marginTop: 40, marginBottom: 80 }}
      >
        <div className="palette-nav-menu">
          <button className="palette-button" onClick={() => copyEvent(1)}>
            Copy text
          </button>
          <button className="palette-button" onClick={() => copyEvent(2)}>
            Copy background
          </button>
          <button className="palette-button" onClick={() => copyEvent(3)}>
            Copy all
          </button>
          <button className="palette-button" onClick={() => saveColorsAsCss()}>
            Download
          </button>
          <button
            className="palette-button"
            onClick={() => setShowResultMax(!showResultMax)}
          >
            {showResultMax ? "Show less" : "Show more"}
          </button>
        </div>

        <div
          className={`palette-result ${
            showResultMax ? "" : "palette-result-small"
          }`}
        >
          <div className="custom-row">
            <div className="custom-col">
              {colorPalette.map((color: any, index: number) => (
                <div className="palette-result-item" key={index}>
                  <p className="m-0 p-0">
                    .text-{color.name}
                    {" {"}
                  </p>
                  <p className="palette-css-value" style={{ marginLeft: 25 }}>
                    color:{" "}
                    <span
                      style={{
                        padding: 4,
                        backgroundColor: color.color,
                        borderRadius: 8,
                      }}
                    >
                      {color.color}
                    </span>
                    !imporant;
                  </p>
                  <p className="m-0 p-0">{"}"}</p>
                </div>
              ))}
            </div>
            <div className="custom-col">
              {colorPalette.map((color: any, index: number) => (
                <div className="palette-result-item" key={index}>
                  <p className="m-0 p-0">
                    .bg-{color.name}
                    {" {"}
                  </p>
                  <p className="palette-css-value" style={{ marginLeft: 25 }}>
                    background-color:{" "}
                    <span
                      style={{
                        padding: 4,
                        backgroundColor: color.color,
                        borderRadius: 8,
                      }}
                    >
                      {color.color}
                    </span>
                    !imporant;
                  </p>
                  <p className="m-0 p-0">{"}"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaletteGenerator;
