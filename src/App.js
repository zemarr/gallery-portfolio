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
      <Router>
        <StyledApp className="styled-app">
          <Sidebar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bio" exact component={Bio} />
          </Switch>
        </StyledApp>
      </Router>
    </div>
  );
}

export default App;
