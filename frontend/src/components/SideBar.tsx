import React, { useState } from "react";
import {
  Diagram2Fill,
  HouseFill,
  PersonBadge,
  PaletteFill,
  ChatLeftTextFill,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState<string>("");

  const redirectEvt = (path: string) => {
    setActiveLink(`${path}`);
    navigate(`/${path}`);
  };

  const renderActiveLink = (str: string) => {
    return str === activeLink ? "sidebar-item-active" : "";
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div
          className={`sidebar-item ${renderActiveLink("")}`}
          onClick={() => redirectEvt("")}
        >
          <HouseFill color={"white"} size={30} />
          <p className="sidebar-item-text">Home</p>
        </div>

        <div
          className={`sidebar-item ${renderActiveLink("layout")}`}
          onClick={() => redirectEvt("layout")}
        >
          <Diagram2Fill color={"white"} size={30} />
          <p className="sidebar-item-text">Grid</p>
        </div>

        <div
          className={`sidebar-item ${renderActiveLink("palette")}`}
          onClick={() => redirectEvt("palette")}
        >
          <PaletteFill color={"white"} size={30} />
          <p className="sidebar-item-text">Palette</p>
        </div>
      </div>

      <div className="sidebar-content-last">
        <div
          className={`sidebar-item ${renderActiveLink("support")}`}
          onClick={() => redirectEvt("support")}
        >
          <ChatLeftTextFill color={"white"} size={30} />
          <p className="sidebar-item-text">Support</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
