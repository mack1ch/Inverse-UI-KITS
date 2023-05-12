import "./styles/colors.css";
import "./styles/index.css";
import "./styles/typography.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/Navbar.jsx";


function App() {
  return (
    <>
     <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route>
           
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
