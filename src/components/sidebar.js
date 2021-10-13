import React from "react";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../styled-components/containers";
import { StyledSidebar } from "../styled-components/styledSidebar";

const Sidebar = () => {
  return (
    <>
      <StyledSidebar>
        <StyledLogo className="logo-container">
          <span>PB2</span>
        </StyledLogo>
        <ul className="navigation">
          <li>
            <NavLink to="/">Snapshot</NavLink>
          </li>
          <li>
            <NavLink to="/bio">Bio</NavLink>
          </li>
        </ul>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
