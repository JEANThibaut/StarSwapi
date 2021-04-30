import './App.css';
// Imports pour les éléments du template
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/Nav';

import SearchBar from './components/recherche/input/SearchBar'
import Categories from "./components/acceuil/Categories"
import People from "./components/recherche/people/People"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div> 
      <Header /> 
      <Router>
        <Nav />
          <main className="container my-5">
            <Switch>
              <Route path="/article">
                <Categories />
              </Route>
              <Route path="/recherche">
                <SearchBar />
              </Route>
              <Route path="/people">
                <People />
              </Route>
              <Route path="/">
                <Categories />
              </Route>
              </Switch>
          </main>
      </Router>
      <Footer />
    </div>
    )
}

export default App;
