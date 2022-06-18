import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from "../routes/Project";
import Board from "../routes/Board";
import Profile from "../routes/About";
import Contact from "../routes/Contect";
import Header from "./Header";
import Navigation from "./Nav";
import Home from "../routes/Home";
import Footer from "./Footer";
import Start from "../routes/Start";


function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/">
          {/* <Start /> */}
          <Navigation />
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/Project">
          <Navigation />
          <Header />
          <Project />
          <Footer />
        </Route>
        <Route exact path="/Board">
          <Navigation />
          <Header />
            <Board />
            <Footer />
        </Route>
        <Route exact path="/Profile">
          <Navigation />
          <Header />
            <Profile />
            <Footer />
        </Route>
        <Route exact path="/Contact">
          <Navigation />
          <Header />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;