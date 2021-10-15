import React from "react";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../styled-components/containers";
import { StyledMobileSidebar, StyledSidebar } from "../styled-components/styledSidebar";

const Sidebar = ({ sidebarActive, setSidebarActive }) => {
  console.log(sidebarActive);
  return (
    <>
      <StyledSidebar isOpen={!sidebarActive}>
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: "500", color: "grey" }} className="">Snapshot</NavLink>
          </li>
          <li>
            <NavLink exact to="/toni" activeStyle={{ fontWeight: "500", color: "grey" }} className="">Bio</NavLink>
          </li>
        </ul>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
