import Home from "./pages/Home";
import GlobalStyle, { StyledHamburger, StyledHeader } from "./styled-components/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bio from "./pages/Bio";
import Sidebar from "./components/sidebar";
import {
  StyledApp, StyledLogo,
} from "./styled-components/containers";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarActive = (e) => {
    if (e.type === "click") {
      setSidebarActive(!sidebarActive)
    }
  }

  useEffect(() => {
    // "effect"

    return () => {
      // "cleanup"
    }
  }, ["input"])
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <StyledApp className="styled-app container-fluid">
          <StyledHeader>
            <StyledLogo to="/" className="logo-container">
              <h4>Campbell</h4>
            </StyledLogo>
            <StyledHamburger onClick={handleSidebarActive} menuOpen={sidebarActive}>
              <div className="menu-btn_hamburger"></div>
            </StyledHamburger>
          </StyledHeader>

          <div className="d-flex">
            <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/toni" exact component={Bio} />
            </Switch>
          </div>
        </StyledApp>
      </Router>
    </div>
  );
}

export default App;
