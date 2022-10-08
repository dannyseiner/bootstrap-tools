import React from "react";
import { ConeStriped, PersonFill } from "react-bootstrap-icons";

function NavBarLogged() {
  return (
    <div className="navbar-container">
      <ConeStriped size={25} />
      <h3>Bootstrap Tools</h3>
      <div className="navbar-rightside">
        <PersonFill size={25} />
      </div>
    </div>
  );
}

export default NavBarLogged;
