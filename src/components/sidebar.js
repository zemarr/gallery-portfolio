import React from "react";
import { NavLink } from "react-router-dom";
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
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: "500", color: "grey" }} onClick={closeSidebar}>Snapshot</NavLink>
          </li>
          <li>
            <NavLink exact to="/toni" activeStyle={{ fontWeight: "500", color: "grey" }} onClick={closeSidebar}>Bio</NavLink>
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
