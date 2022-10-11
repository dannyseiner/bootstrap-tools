import React, { useState, useEffect } from "react";
import {
  Diagram2Fill,
  HouseFill,
  PaletteFill,
  InfoSquareFill,
} from "react-bootstrap-icons";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar({ expand }: any) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState<string>(
    useLocation().pathname.replace("/", "")
  );

  const redirectEvt = (path: string) => {
    setActiveLink(`${path}`);
    navigate(`/${path}`);
  };

  const renderActiveLink = (str: string) => {
    return str === activeLink ? "sidebar-item-active" : "";
  };

  return (
    <div
      className={`sidebar-container ${
        expand === true ? "sidebar-expaned" : ""
      }`}
    >
      <div className="sidebar-content">
        <div
          className={`sidebar-item ${renderActiveLink("")}`}
          onClick={() => redirectEvt("")}
        >
          <HouseFill color={"black"} size={30} />
          <p className="sidebar-item-text">Home</p>
        </div>

        <div
          className={`sidebar-item ${renderActiveLink("layout")}`}
          onClick={() => redirectEvt("layout")}
        >
          <Diagram2Fill color={"black"} size={30} />
          <p className="sidebar-item-text">Grid</p>
        </div>

        <div
          className={`sidebar-item ${renderActiveLink("palette")}`}
          onClick={() => redirectEvt("palette")}
        >
          <PaletteFill color={"black"} size={30} />
          <p className="sidebar-item-text">Palette</p>
        </div>
      </div>

      <div className="sidebar-content-last">
        <div className="sidebar-content">
          <div
            className={`sidebar-item ${renderActiveLink("support")}`}
            onClick={() => redirectEvt("support")}
          >
            <InfoSquareFill color={"black"} size={30} />
            <p className="sidebar-item-text">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
