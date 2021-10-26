import React from "react";
import { NavLink } from "react-router-dom";
import { StyledLogo } from "../styled-components/containers";
import { StyledSidebar } from "../styled-components/styledSidebar";

const Sidebar = ({ sidebarActive, setSidebarActive }) => {

  const closeSidebar = (e) => {
    if (e.type === "click") {
      setSidebarActive(false);
    }
  }
  return (
    <>
      <StyledSidebar isOpen={!sidebarActive}>
        <StyledLogo to="/" className="sidebar-logo-container">
          <h4>Toni Campbell
            {/* <span style={{fontSize: "30px", color: "brown"}}>.</span>ng */}
          </h4>
        </StyledLogo>
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: "600", color: "grey" }} onClick={closeSidebar}>Recent Collections</NavLink>
          </li>
          <li>
            <NavLink exact to="/bio" activeStyle={{ fontWeight: "600", color: "grey" }} onClick={closeSidebar}>Bio</NavLink>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oluwatonic" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/oluwatonic" target="_blank" rel="noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/oluwatonic" target="_blank" rel="noreferrer">Instagram</a>
          </li>
          <li>
            <a href="mailto:toni@kinfolk.vc" target="_blank" rel="noreferrer">Email</a>
          </li>
        </ul>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
