import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import "../css/index.css";
import SideBar from "./sidebar/SideBar";
import NavBarLogged from "./NavBarLogged";
import LayoutGenerator from "../screens/layout/LayoutGenerator";
import PaletteGenerator from "../screens/palette/PaletteGenerator";
import Support from "../screens/support/Support";
import Components from "../screens/components/Components";
import News from "../screens/news/News";
import NewsSingle from "../screens/news/NewsSingle";
import Login from "../screens/login/Login";

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
            <Route path="/components" element={<Components />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:title" element={<NewsSingle />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
