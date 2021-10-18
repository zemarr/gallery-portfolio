import Home from "./pages/Home";
import GlobalStyle, { StyledHamburger, StyledHeader } from "./styled-components/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bio from "./pages/Bio";
import Sidebar from "./components/sidebar";
import {
  StyledApp, StyledLogo,
} from "./styled-components/containers";
import { useState } from "react";
// import { useEffect } from "react";
// import ReactCSSTransitionGroup from 'react-transition-group';

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarActive = (e) => {
    if (e.type === "click") {
      setSidebarActive(!sidebarActive)
    }
  }

  // useEffect(() => {
  //   // "effect"

  //   return () => {
  //     // "cleanup"
  //   }
  // }, ["input"])
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <StyledApp className="styled-app container-fluid">
          <StyledHeader>
            <StyledLogo to="/" className="logo-container">
              <h4>Campbell
                {/* <span style={{ fontSize: "30px", color: "brown" }}>.</span>ng */}
              </h4>
            </StyledLogo>
            <StyledHamburger onClick={handleSidebarActive} menuOpen={sidebarActive}>
              <div className="menu-btn_hamburger"></div>
            </StyledHamburger>
          </StyledHeader>

          <div className="d-flex">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/toni" exact component={Bio} />
            </Switch>
            <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
          </div>
        </StyledApp>
      </Router>
    </div>
  );
}

export default App;
