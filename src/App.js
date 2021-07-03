import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import MobileTitleScreen from "./Components/MobileTitleScreen";
import DesktopTitleScreen from "./Components/DesktopTitleScreen";
import AboutMe from "./Components/Views/AboutMe";
import SasTherapy from "./Components/Views/SasTherapy";
import Offer from "./Components/Views/Offer";
import Contact from "./Components/Views/Contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* ONLY ONE TITLE SCREEN WILL BE DISPLAYED AT A GIVEN TIME. 
        THIS IS ENSURED BY SPECIFYING DISPLAY BREAKPOINTS 
        IN EACH MENU COMPONENT'S OUTERMOST WRAPPER */}
        <MobileTitleScreen />
        <DesktopTitleScreen />
        <Switch>
          <Route path="/about-me" component={AboutMe} />
          <Route path="/sas-therapy" component={SasTherapy} />
          <Route path="/offer" component={Offer} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
