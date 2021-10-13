import Home from "./pages/Home";
import GlobalStyle, { StyledHeader } from "./styled-components/globalStyles";
import { MenuSharp } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bio from "./pages/Bio";
import Sidebar from "./components/sidebar";
import {
  StyledApp,
  StyledContainer,
  StyledLogo,
} from "./styled-components/containers";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <StyledHeader className="styled-header">
        <StyledLogo className="logo-container">
          <span>PB2</span>
        </StyledLogo>
      </StyledHeader> */}

      <Router>
        <StyledApp className="styled-app">
          <Sidebar />

          <StyledContainer maxWidth="1250px" className="styled-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/bio" exact component={Bio} />
            </Switch>
          </StyledContainer>
        </StyledApp>
      </Router>
    </div>
  );
}

export default App;
