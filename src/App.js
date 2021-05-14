import "./App.css";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import { Hidden } from "@material-ui/core";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
       <CssBaseline /> 
      <Home />
      <Hidden xsDown>
        <Projects />
      </Hidden>
      <Contact />
    </>
  );
}

export default App;
