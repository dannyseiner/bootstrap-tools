import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import "../css/index.css";
import SideBar from "./SideBar";
import NavBarLogged from "./NavBarLogged";
import LayoutGenerator from "../screens/LayoutGenerator";
function AppRouter() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <NavBarLogged />
        <SideBar />
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layout" element={<LayoutGenerator />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
