import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./routes/Project";
import Profile from "./routes/About";
import Header from "./components/Header";
import Navigation from "./components/Nav";
import Home from "./routes/Home";


function App() {
  return <Router>
    <Switch>
      <Route path="/Profile">
          <Navigation />
          <Header />
          <Profile />
        </Route>
      <Route path="/Project">
        <Navigation />
        <Header />
        <Project />
      </Route>
      <Route path="/">
        <Navigation />
        <Header />
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;