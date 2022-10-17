import React, { useState } from "react";
import { PersonFill, List, X } from "react-bootstrap-icons";
import { INavbar } from "../interfaces/components/INavbar";
function NavBarLogged({ expandFunction }: INavbar) {
  const [expandStatus, setExpandStatus] = useState<boolean>(false);
  return (
    <div className="navbar-container">
      {expandStatus === true ? (
        <X
          size={30}
          className="fill-dark cursor-pointer"
          onClick={() => {
            setExpandStatus(false);
            expandFunction(false);
          }}
        />
      ) : (
        <List
          size={30}
          className="fill-dark cursor-pointer"
          onClick={() => {
            setExpandStatus(true);
            expandFunction(true);
          }}
        />
      )}

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
