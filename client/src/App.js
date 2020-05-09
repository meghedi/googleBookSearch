import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import Book from './components/Book';

import Nav from './components/Nav';


function App()  {
    return (
      <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/books/:id" component={Book} />
      </div>
    </Router>
    );
  }

export default App;
