import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./routes/Project";
import Board from "./routes/Board";
import Profile from "./routes/About";
import Contact from "./routes/Contect";
import Header from "./components/Header";
import Navigation from "./components/Nav";
import Home from "./routes/Home";


function App() {
  return <Router>
    <Switch>
      <Route path="/Contact">
        <Navigation />
        <Header />
        <Contact />
      </Route>
      <Route path="/Profile">
          <Navigation />
          <Header />
          <Profile />
      </Route>
      <Route path="/Board">
        <Navigation />
          <Header />
          <Board />
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