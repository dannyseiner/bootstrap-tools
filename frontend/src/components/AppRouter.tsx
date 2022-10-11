import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import "../css/index.css";
import SideBar from "./SideBar";
import NavBarLogged from "./NavBarLogged";
import LayoutGenerator from "../screens/LayoutGenerator";
import PaletteGenerator from "../screens/PaletteGenerator";
import Support from "../screens/Support";
function AppRouter() {
  const [expandSideBar, setExpandSideBar] = useState<boolean>(false);

  const sideBarEvt = (e: boolean) => setExpandSideBar(e);

  return (
    <BrowserRouter>
      <div className="page-container">
        <NavBarLogged
          expandStatus={expandSideBar}
          expandFunction={(e: boolean) => sideBarEvt(e)}
        />
        <SideBar expand={expandSideBar} />
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layout" element={<LayoutGenerator />} />
            <Route path="/palette" element={<PaletteGenerator />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
