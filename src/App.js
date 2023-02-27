import React from "react";
import Header from './components/header';
import Footer from './components/footer';
import Home from "./pages/home";
import Characters from "./pages/characters";
import Character from "./pages/character";
import Locations from "./pages/locations";
import Location from "./pages/location";
import Episodes from "./pages/episodes";
import Episode from "./pages/episode";
import PageNotFound from "./pages/not-found";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, NotFound } from 'react-router-dom';

export default function App() {

  return (
    <div className="rick-and-morty-character-wiki">
      <div className="content container">
        <Header/>
        <Router>
          <Routes>
            <Route path='*' element={<PageNotFound />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/characters" element={<Characters />}></Route>
            <Route path="/character/:id" element={<Character />}></Route>
            <Route path="/locations" element={<Locations />}></Route>
            <Route path="/location/:id" element={<Location />}></Route>
            <Route path="/episodes" element={<Episodes />}></Route>
            <Route path="/episode/:id" element={<Episode />}></Route>
          </Routes>
        </Router>
        <Footer/>
      </div>
    </div> 
  );
}
