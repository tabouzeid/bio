import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import WorkPage from './components/WorkPage'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <FrontPage />
        </Route>
        <Route exact path={"/work"}>
          <WorkPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
