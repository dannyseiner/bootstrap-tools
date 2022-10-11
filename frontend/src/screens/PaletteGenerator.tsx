import React, { useState } from "react";
function PaletteGenerator() {
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

  return (
    <div>
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
                <div className="color-input-container">
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
                </div>
              ))}
          </div>
          <div className="custom-col">
            {colorPalette
              .slice(colorPalette.length / 2, colorPalette.length)
              .map((color: any, index: number) => (
                <div className="color-input-container">
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
                </div>
              ))}
          </div>
        </div>
        <div className="palette-result">
          {colorPalette.map((color: any, index: number) => (
            <div className="palette-result-item">
              <p>
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
                ;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteGenerator;
