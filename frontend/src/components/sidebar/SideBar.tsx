import React, { useState, useEffect } from "react";
import {
  Diagram2Fill,
  HouseFill,
  PaletteFill,
  InfoSquareFill,
  CollectionFill,
  Newspaper,
} from "react-bootstrap-icons";
import SideBarLink from "./SideBarLink";
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
        <SideBarLink
          index={""}
          icon={<HouseFill color={"black"} size={30} />}
          text="Home"
          isActive={renderActiveLink("")}
          setActiveLink={(e: string) => setActiveLink(e)}
        />

        <SideBarLink
          index={"layout"}
          icon={<Diagram2Fill color={"black"} size={30} />}
          text="Grid"
          isActive={renderActiveLink("layout")}
          setActiveLink={(e: string) => setActiveLink(e)}
        />

        <SideBarLink
          index={"palette"}
          icon={<PaletteFill color={"black"} size={30} />}
          text="Palette"
          isActive={renderActiveLink("palette")}
          setActiveLink={(e: string) => setActiveLink(e)}
        />

        <SideBarLink
          index={"components"}
          icon={<CollectionFill color={"black"} size={30} />}
          text="Components"
          isActive={renderActiveLink("components")}
          setActiveLink={(e: string) => setActiveLink(e)}
        />
      </div>

      <div className="sidebar-content-last">
        <div className="sidebar-content">
          <SideBarLink
            index={"news"}
            icon={<Newspaper color={"black"} size={30} />}
            text="News"
            isActive={renderActiveLink("news")}
            setActiveLink={(e: string) => setActiveLink(e)}
          />

          <SideBarLink
            index={"support"}
            icon={<InfoSquareFill color={"black"} size={30} />}
            text="Support"
            isActive={renderActiveLink("support")}
            setActiveLink={(e: string) => setActiveLink(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
