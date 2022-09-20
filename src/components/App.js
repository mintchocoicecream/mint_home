import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "../routes/Project";
import Profile from "../routes/About";
import Contact from "../routes/Contect";
import Home from "../routes/Home";


function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Project">
          <Project />
        </Route>
        <Route exact path="/Profile">
            <Profile />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;