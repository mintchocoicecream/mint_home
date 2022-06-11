import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "../routes/Project";
import Board from "../routes/Board";
import Profile from "../routes/About";
import Contact from "../routes/Contect";
import Header from "./Header";
import Navigation from "./Nav";
import Home from "../routes/Home";
import Start from "../routes/Start";


function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/">
          <Start />
          <Navigation />
          <Header />
          <Home />
        </Route>
        <Route exact path="/Project">
          <Navigation />
          <Header />
          <Project />
        </Route>
        <Route exact path="/Board">
          <Navigation />
          <Header />
            <Board />
        </Route>
        <Route exact path="/Profile">
          <Navigation />
          <Header />
            <Profile />
        </Route>
        <Route exact path="/Contact">
          <Navigation />
          <Header />
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;