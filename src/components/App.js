import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "../routes/Project";
import Board from "../routes/Board";
import Profile from "../routes/About";
import Contact from "../routes/Contect";
import Navigation from "./Nav";
import Home from "../routes/Home";
import Footer from "./Footer";
import BoardWrites from "../routes/BoardWrites";
// import Start from "../routes/Start";


function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/Project">
          <Navigation />
          <Project />
          <Footer />
        </Route>
        <Route exact path="/Board">
          <Navigation />
            <Board />
            <Footer />
        </Route>
        <Route exact path="/BoardWrites">
          <Navigation />
            <BoardWrites />
            <Footer />
        </Route>
        <Route exact path="/Profile">
          <Navigation />
            <Profile />
            <Footer />
        </Route>
        <Route exact path="/Contact">
          <Navigation />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;