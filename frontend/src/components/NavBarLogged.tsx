import React from "react";
import { ConeStriped, PersonFill } from "react-bootstrap-icons";

function NavBarLogged() {
  return (
    <div className="navbar-container">
      <ConeStriped size={25} className="fill-primary" />
      <h3>
        Bootstrap <span className="text-primary">Tools</span>
      </h3>
      <div className="navbar-rightside cursor-pointer">
        <PersonFill size={25} />
      </div>
    </div>
  );
}

export default NavBarLogged;
