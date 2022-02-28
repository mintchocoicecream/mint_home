import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./routes/Project";
import Profile from "./routes/About";
import Home from "./routes/Home";


function App() {
  return <Router>
    <Switch>
      <Route path="/Profile">
          <Profile />
        </Route>
      <Route path="/Project">
        <Project />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;