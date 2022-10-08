import React from "react";
import {
  Diagram2Fill,
  House,
  Person,
  PersonBadge,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const redirectLink = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebar-item" onClick={() => redirectLink("")}>
          <House color={"white"} size={30} />
          <p className="sidebar-item-text">Home</p>
        </div>

        <div className="sidebar-item" onClick={() => redirectLink("layout")}>
          <Diagram2Fill color={"white"} size={30} />
          <p className="sidebar-item-text">Grid Builder</p>
        </div>
      </div>

      <div className="sidebar-content-last">
        <div className="sidebar-item">
          <PersonBadge color={"white"} size={30} />
          <p className="sidebar-item-text">Grid Builder</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
