import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Nav";


function App() {
  return <Router>
    <Switch>
      <Route path="/">
        <Navigation />
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;