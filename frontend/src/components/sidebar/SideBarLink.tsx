import React, { Component } from "react";
import { HouseFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
function SideBarLink({ index, icon, text, isActive, setActiveLink }: any) {
  const navigate = useNavigate();

  const redirectEvt = () => {
    setActiveLink(index);
    navigate(`/${index}`);
  };

  return (
    <div className={`sidebar-item ${isActive}`} onClick={() => redirectEvt()}>
      {icon}
      <p className="sidebar-item-text">{text}</p>
    </div>
  );
}

export default SideBarLink;
